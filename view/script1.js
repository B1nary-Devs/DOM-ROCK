async function buscarCliente() {
    try {
      const response = await axios.get('http://localhost:8080/cliente');
      const clientes = response.data;
  
      const selectClientes = document.getElementById('selectCliente');
  
      clientes.forEach(cliente => {
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
        option.value = produto.idProduto;
        option.text = produto.nomeProduto;
        selectProdutos.appendChild(option);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function cadastrarPlanejamento(){
    const selectProdutos = document.getElementById('selectProduto')
    const selectClientes = document.getElementById('selectCliente')
    const quanti = document.getElementById("txtquantidade")
    const data = document.getElementById("txtdata")
    try{
     await axios.post('http://localhost:8080/planejamento',{
        dia: data.value,
        idCliente: selectClientes.value,
        idProduto: selectProdutos.value,
        idVendedor: 1,
        quantidade: quanti.value
    })
    window.alert("Cadastro realizado com sucesso!")
    window.location.href = 'visualizar_plan.html'
    }catch(error) {
        console.log(`${error}`)
    }
}



async function cadastrar(){
    const nomeAnimal = document.getElementById("txtnome")
    const idadeAnimal = document.getElementById("txtidade")
    const corAnimal = document.getElementById("txtcor")
    const sexoAanimal = document.getElementById("txtsexo")

     await axios.post('http://localhost:8000/animais',{
        nome: nomeAnimal.value,
        idade: idadeAnimal.value,
        sexo: sexoAanimal.value,
        cor: corAnimal.value
    })
    carregarAnimais()
}

document.addEventListener('DOMContentLoaded', () => {
    buscarProdutos();
    buscarCliente();
  });

/*
const showHideContent = function () {
  document.querySelector("#mestral").addEventListener('click', function () {
    document.querySelector("#grupo1").style.display = "block";
    document.querySelector("#plan-completo").style.display = "hide";
  });

  document.querySelector("#trimestre").addEventListener('click', function () {
    document.querySelector("#grupo1").style.display = "block";
    document.querySelector("#plan-completo").style.display = "block";
  });
 
}

const showHideContentjQuery = function () {
  jQuery("#1mes").on("click", function () {
    jQuery("#plan-completo").hide();
    jQuery("#grupo1").show();
  });

  jQuery("#3meses").on('click', function () {
    jQuery("#plan-completo").show();
    jQUery("#grupo1").show();
    });
}

showHideContentjQuery();*/