async function CarregarCarteiraClientes() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor/1');
      const vendedor = response.data;
  
      const selectClientes = document.getElementById('tabelaClientes');
  
      vendedor.clientes.forEach(cliente => {
        const linha = document.createElement('tr');
        const idCliente = document.createElement ('td')
        idCliente.textContent = cliente.id
        const nomeCliente = document.createElement ('td')
        nomeCliente.textContent = cliente.nome
        const emailCliente = document.createElement ('td')
        emailCliente.textContent = cliente.email
        linha.appendChild(idCliente)
        linha.appendChild(nomeCliente)
        linha.appendChild(emailCliente)
        selectClientes.appendChild(linha)
      });
    } catch (error) {
      console.error(error)
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    CarregarCarteiraClientes()    
  });