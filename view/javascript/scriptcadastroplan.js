async function buscarCliente() {
  try {
    //const response = await axios.get('http://localhost:8080/vendedor/1');
    //const vendedor = response.data;

    //redireciona a tela com o vendedor logado
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
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

function inputVendedorCliente() {
  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');
  window.location.href = `clientes.html?idVendedor=${idVendedor}`;
}

function inputVendedorDashboard() {
  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');
  window.location.href = `dashboard.html?idVendedor=${idVendedor}`;
}

function inputVendedorGerenciamento() {
  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');
  window.location.href = `visualizar_plan.html?idVendedor=${idVendedor}`;
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

function cadastrarRegistroPlanejamento(planejamentoIdcallBack) {

  const selectQuantidade = document.getElementById('txtquantidade');
  const selectMes = document.getElementById('txtdata');
  const selectQuantidade2 = document.getElementById('txtquantidade2');
  const selectMes2 = document.getElementById('txtdata2');
  const selectQuantidade3 = document.getElementById('txtquantidade3');
  const selectMes3 = document.getElementById('txtdata3');

  const mes1 = new Date(`${selectMes.value}-01`)
  const dataFormatada1 = mes1.toISOString().slice(0, 10);
  const mes2 = new Date(`${selectMes2.value}-01`)
  const dataFormatada2 = mes2.toISOString().slice(0, 10);
  const mes3 = new Date(`${selectMes3.value}-01`)
  const dataFormatada3 = mes3.toISOString().slice(0, 10);

  console.log(dataFormatada1)
  console.log(dataFormatada2)
  console.log(dataFormatada3)

  const hoje = new Date();
  const dataAtual = hoje.toISOString().slice(0, 10);;
  console.log(dataAtual)

  // criar objeto 1 usando planejamentoId
  axios.post('http://localhost:8080/registro_planejamento', {
    diaRegistro: dataAtual,
    quantidade: selectQuantidade.value,
    mesPlanejamento: dataFormatada1,
    idPlanejamento: planejamentoIdcallBack
    // outros dados do objeto 1
  })
    .then(response => {
      console.log('Objeto 1 cadastrado com sucesso!');
    })
    .catch(error => {
      console.log(`Objeto 1: ${error}`)
    });

  // criar objeto 2 usando planejamentoId
  axios.post('http://localhost:8080/registro_planejamento', {
    diaRegistro: dataAtual,
    quantidade: selectQuantidade2.value,
    mesPlanejamento: dataFormatada2,
    idPlanejamento: planejamentoIdcallBack
    // outros dados do objeto 2
  })
    .then(response => {
      console.log('Objeto 2 cadastrado com sucesso!');
    })
    .catch(error => {
      console.log(`Objeto 2: ${error}`)
    });

  // criar objeto 3 usando planejamentoId
  axios.post('http://localhost:8080/registro_planejamento', {
    diaRegistro: dataAtual,
    quantidade: selectQuantidade3.value,
    mesPlanejamento: dataFormatada3,
    idPlanejamento: planejamentoIdcallBack
    // outros dados do objeto 3
  })
    .then(response => {
      console.log('Objeto 3 cadastrado com sucesso!');
    })
    .catch(error => {
      console.log(`Objeto 3: ${error}`)
    });
}

document.addEventListener('DOMContentLoaded', () => {
  buscarProdutos();
  buscarCliente();
});
