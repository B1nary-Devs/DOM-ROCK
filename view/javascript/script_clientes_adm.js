async function CarregarCarteiraClientesAdmin() {
    try {
        //redireciona a tela com o vendedor logado
     
        const response = await axios.get(`http://localhost:8080/cliente`);
        const clientes = response.data;
    
  
      const selectClientes = document.getElementById('tabelaClientes');
  
      clientes.forEach(cliente => {
        const linha = document.createElement('tr');
        const idCliente = document.createElement ('td')
        idCliente.textContent = cliente.id
        const nomeVendedor = document.createElement('td')
        nomeVendedor.textContent = cliente.nomeVendedor
        const nomeCliente = document.createElement ('td')
        nomeCliente.textContent = cliente.nome
        const emailCliente = document.createElement ('td')
        emailCliente.textContent = cliente.email
        linha.appendChild(idCliente)
        linha.appendChild(nomeVendedor)
        linha.appendChild(nomeCliente)
        linha.appendChild(emailCliente)
        selectClientes.appendChild(linha)
      });
    } catch (error) {
      console.error(error)
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    CarregarCarteiraClientesAdmin()
});