async function buscarCliente() {
  try {
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

  return true
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function editarRegistro() {

  if (validaCampos()) {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor')
    const idRegistro = params.get('idRegistro')
    const diaRegistro = params.get('diaRegistro')
    const selectProdutos = document.getElementById('selectProduto')
    const selectClientes = document.getElementById('selectCliente')
    await axios.put(`http://localhost:8080/registro/${idRegistro}`, {
      idCliente: selectClientes.value,
      idProduto: selectProdutos.value,
      idVendedor: idVendedor,
      id: idRegistro,
      diaRegistro: diaRegistro
    })
      .then(response => {
        alert('Registro atualizado com sucesso!')
        sleep(300).then(() => {
        window.location.href = `visualizar_plan.html?idVendedor=${idVendedor}`});
      })
      .catch(error => {
        alert("Alguma coisa deu errado")
        console.log(`Erro cadastro Planejamento: ${error}`)
      });
  } else {
    return false
  }
}


document.addEventListener('DOMContentLoaded', () => {
  buscarProdutos();
  buscarCliente();
});
