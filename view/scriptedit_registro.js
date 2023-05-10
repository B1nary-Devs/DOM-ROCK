async function buscarCliente() {
    try {
        //const response = await axios.get('http://localhost:8080/vendedor/1');
        //const vendedor = response.data;

        //redireciona a tela com o vendedor logado
        const idVendedor = params.get('id');
        const response = await axios.get(`http://localhost:8080/vendedor/${idVendedor}`);
        const vendedor = response.data;
  
        const selectClientes = document.getElementById('selectCliente');

        vendedor.clientes.forEach(cliente => {
            const option = document.createElement('option');
            option.value = cliente.id;
            option.text = cliente.nome;
            selectClientes.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

async function buscarProdutos() {
    try {
        const response = await axios.get('http://localhost:8080/produto');
        const produtos = response.data;

        const selectProdutos = document.getElementById('selectProduto');

        produtos.forEach(produto => {
            const option = document.createElement('option');
            option.value = produto.id;
            option.text = produto.nome;
            selectProdutos.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}


function validaCampos() {
    if (document.getElementById("selectProduto").value == "") {
        document.getElementById("selectProduto").focus()
        alert("ATENÇÃO! Produto não selecionado!")
        return false
    }

    if (document.getElementById("selectCliente").value == "") {
        document.getElementById("selectCliente").focus()
        alert("ATENÇÃO! Cliente não selecionado!")
        return false
    }

    if (document.getElementById("txtquantidade").value == "") {
        document.getElementById("txtquantidade").focus()
        alert("Atenção! Quantidade do primeiro mês não preenchida!")
        return false
    }

    if (document.getElementById("txtdata").value == "") {
        document.getElementById("txtdata").focus()
        alert("Atenção! Data do primeiro mês não selecionada!")
        return false
    }

    if (document.getElementById("txtquantidade2").value == "") {
        document.getElementById("txtquantidade2").focus()
        alert("Atenção! Quantidade do segundo mês não preenchida!")
        return false
    }

    if (document.getElementById("txtdata2").value == "") {
        document.getElementById("txtdata2").focus()
        alert("Atenção! Data do segundo mês não selecionada!")
        return false
    }

    if (document.getElementById("txtquantidade3").value == "") {
        document.getElementById("txtquantidade3").focus()
        alert("Atenção! Quantidade do terceiro mês não preenchida!")
        return false
    }

    if (document.getElementById("txtdata3").value == "") {
        document.getElementById("txtdata3").focus()
        alert("Atenção! Data do terceiro mês não selecionada!")
        return false
    }

    return true
}


function cadastrarPlanejamento(callback) {

    if (validaCampos()) {
        const selectProdutos = document.getElementById('selectProduto')
        const selectClientes = document.getElementById('selectCliente')
        axios.post('http://localhost:8080/planejamento', {
            idCliente: selectClientes.value,
            idProduto: selectProdutos.value,
            idVendedor: 1,
        })
            .then(response => {
                const planejamentoIdcallBack = response.data.id;
                callback(planejamentoIdcallBack);
                alert('Planejamento cadastrado com sucesso!')
                window.location.href = 'visualizar_plan.html';
            })
            .catch(error => {
                console.log(`Erro cadastro Planejamento: ${error}`)
            });
    } else {
        return false
    }
}

function editarRegistroPlanejamento() {
    const selectQuantidade = document.getElementById('txtquantidade');
    const selectMes = document.getElementById('txtdata');

    const mes1 = new Date(`${selectMes.value}-01`)
    const dataFormatada1 = mes1.toISOString().slice(0, 10);

    const params = new URLSearchParams(window.location.search);
    const idRegistro = params.get('id');
    const idPlanejamento = params.get('idPlanejamento')
    const diaRegistro = params.get('diaRegistro')


    axios.put(`http://localhost:8080/registro_planejamento/${idRegistro}`, {
        quantidade: selectQuantidade.value,
        mesPlanejamento: dataFormatada1,
        id: idRegistro,
        diaRegistro: diaRegistro,
        idPlanejamento: idPlanejamento
    })
    .then(response => {
        alert('Planejamento atualizado com sucesso!');
        window.location.href = `visualizar_registro.html?id=${idPlanejamento}`;
    })
    .catch(error => {
        console.log(`Erro ao atualizar registro de planejamento: ${error}`)
    });
}
