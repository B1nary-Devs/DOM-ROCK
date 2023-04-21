async function buscarCliente() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor/1');
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
  async function cadastrarPlanejamento1(){
    const selectProdutos = document.getElementById('selectProduto')
    const selectClientes = document.getElementById('selectCliente')
    try{
     await axios.post('http://localhost:8080/planejamento',{
        idCliente: selectClientes.value,
        idProduto: selectProdutos.value,
        idVendedor: 1
    },function (response){
      console.log(response);
      window.alert("Cadastro realizado com sucesso!");
      sessionStorage.setItem("IdPlanejamento", response.id);
      // window.location.href = 'visualizar_plan.html'
    });
    }catch(error) {
        console.log(`${error}`)
    }

  }


  
function cadastrarPlanejamento(callback){
  const selectProdutos = document.getElementById('selectProduto')
  const selectClientes = document.getElementById('selectCliente')
  axios.post('http://localhost:8080/planejamento',{
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
}

function cadastrarRegistroPlanejamento(planejamentoIdcallBack) {

  const selectQuantidade = document.getElementById('txtquantidade');
  const selectMes = document.getElementById('txtdata');
  const selectQuantidade2 = document.getElementById('txtquantidade2');
  const selectMes2 = document.getElementById('txtdata2');
  const selectQuantidade3 = document.getElementById('txtquantidade3');
  const selectMes3 = document.getElementById('txtdata3');
  // criar objeto 1 usando planejamentoId
  axios.post('http://localhost:8080/registro_planejamento',{
      quantidade: selectQuantidade.value,
      mesPlanejamento: selectMes.value,
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
  axios.post('http://localhost:8080/registro_planejamento',{
    quantidade: selectQuantidade2.value,
    mesPlanejamento: selectMes2.value,
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
  axios.post('http://localhost:8080/registro_planejamento',{
    quantidade: selectQuantidade3.value,
    mesPlanejamento: selectMes3.value,
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















	//	$(document).ready(function(){
			
		//	var idPlanejamento = sessionStorage.getItem("userNameADM");
				
				//if(userName == null){
				
			//		window.location.href = '/loginadm.html';
				
		//		}
			
	//	});
//sessionStorage.setItem("userNameADM",data[0].userName);