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

function inputVendedorCliente() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `clientes.html?idVendedor=${idVendedor}`;
}

function inputVendedorPlanejamento() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `index.html?idVendedor=${idVendedor}`;
}

function inputVendedorGerenciamento() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `visualizar_registros.html?idVendedor=${idVendedor}`;
}

function inputVendedorDashboard() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `dashboard.html?idVendedor=${idVendedor}`;
}

async function cadastrarPlanejamento() {
    // criar objeto 1 usando planejamentoId
    const params = new URLSearchParams(window.location.search);
    const idRegistro = params.get('idRegistro')
    const idVendedor = params.get('idVendedor')
    const selectQuantidade = document.getElementById('txtquantidade');
    const selectMes = document.getElementById('txtdata');
    const mes1 = new Date(`${selectMes.value}-01`)
    const dataFormatada1 = mes1.toISOString().slice(0, 10);
    const hoje = new Date();
    const dataAtual = hoje.toISOString().slice(0, 10);

    await axios.post('http://localhost:8080/planejamento', { 
        diaRegistro: dataAtual,
        quantidade: selectQuantidade.value,
        mesPlanejamento: dataFormatada1,
        idRegistro: idRegistro
        // outros dados do objeto 1
    })
        .then(response => {
            alert('Registro de Planejamento atualizado com sucesso!');
            window.location.href = `visualizar_planejamentos.html?idVendedor=${idVendedor}&idRegistro=${idRegistro}`;
        })
        .catch(error => {
            console.log(`Erro ao cadastrar registro de planejamento: ${error}`)
        });
}

async function editarPlanejamento() {
    const selectQuantidade = document.getElementById('txtquantidade');
    const selectMes = document.getElementById('txtdata');

    const mes1 = new Date(`${selectMes.value}-01`)
    const dataFormatada1 = mes1.toISOString().slice(0, 10);

    const params = new URLSearchParams(window.location.search);
    const idRegistro = params.get('idRegistro');
    const idPlanejamento = params.get('idPlanejamento')
    const diaRegistro = params.get('diaRegistro')
    const idVendedor = params.get('idVendedor')


    await axios.put(`http://localhost:8080/planejamento/${idPlanejamento}`, {
        quantidade: selectQuantidade.value,
        mesPlanejamento: dataFormatada1,
        id: idPlanejamento,
        diaRegistro: diaRegistro,
        idRegistro: idRegistro
    })
        .then(response => {
            alert('Planejamento atualizado com sucesso!');
            window.location.href = `visualizar_planejamentos.html?idVendedor=${idVendedor}&idRegistro=${idRegistro}`;
        })
        .catch(error => {
            console.log(`Erro ao atualizar registro de planejamento: ${error}`)
        });
}

function mostrarBotaoCerto(){
    const params = new URLSearchParams(window.location.search);
    const diaRegistro = params.get('diaRegistro')
    const botaoEditar = document.getElementById("btnEditar")
    const botaoAdcionar = document.getElementById("btnCadastrar")


    if(diaRegistro){
        botaoEditar.style.display = "block"
        botaoAdcionar.style.display = "none"
    }else{
        botaoEditar.style.display = "none"
        botaoAdcionar.style.display = "block"
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarBotaoCerto()
});