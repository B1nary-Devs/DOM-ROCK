async function buscarCliente() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor/1');
      const vendedor = response.data;
  
      const selectClientes = document.getElementById('selectCliente');
  
      vendedor.clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = `cliente${cliente.id}`;
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
        option.value = `produto${produto.id}`;
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

  async function cadastrarPlanejamento() {
    const selectProdutos = document.getElementById('selectProduto');
    const selectClientes = document.getElementById('selectCliente');
  
    try {
      const response = await axios.post('http://localhost:8080/planejamento', {
        idCliente: selectClientes.value,
        idProduto: selectProdutos.value,
        idVendedor: 1
      });
  
      const idPlanejamento = response.data.id;
      sessionStorage.setItem("IdPlanejamento", idPlanejamento);
  
      window.alert("Cadastro realizado com sucesso!");
      return idPlanejamento;
    } catch (error) {
      console.error(error);
      console.log(`${error}`);
      throw error;
    }
  }
  
  async function cadastrarRegistroPlanejamento(quantidade, mes, idPlanejamento) {
    const selectQuantidade = document.getElementById(quantidade);
    const selectMes = document.getElementById(mes);
    const hoje = new Date();
    const dataFormatada = hoje.toISOString();
  
    try {
      const response = await axios.post('http://localhost:8080/registro_planejamento', {
        quantidade: selectQuantidade.value,
        mesPlanejamento: selectMes.value,
        diaRegistro: dataFormatada,
        idVendedor: 1,
        idPlanejamento: idPlanejamento
      });
    } catch (error) {
      console.error(error);
      console.log(`${error}`);
      throw error;
    }
  }
  
  async function cadastrarTudo() {
    try {
      const selectQuantidade1 = document.getElementById('txtquantidade');
      const selectMes1 = document.getElementById('txtdata');
      const selectQuantidade2 = document.getElementById('txtquantidade2');
      const selectMes2 = document.getElementById('txtdata2');
      const selectQuantidade = document.getElementById('txtquantidade3');
      const selectMes = document.getElementById('txtdata3');

      const idPlanejamento = await cadastrarPlanejamento();
      await cadastrarRegistroPlanejamento(selectQuantidade1, selectMes1, idPlanejamento);
      await cadastrarRegistroPlanejamento(selectQuantidade2, selectMes2, idPlanejamento);
      await cadastrarRegistroPlanejamento(selectQuantidade3, selectMes3, idPlanejamento);
      window.alert("Planejamento cadastrado com sucesso!.")
      window.location.href = 'visualizar_plan.html'
    } catch (error) {
      console.log(error);
      window.alert("Ocorreu um erro ao cadastrar o planejamento e o registro de planejamento.");
    }
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