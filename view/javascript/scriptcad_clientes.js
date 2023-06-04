async function carregarVendedores() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor');
      const vendedores = response.data;
  
      const selectVendedor = document.getElementById('selectVendedor');
  
      vendedores.forEach(vendedor => {
        const option = document.createElement('option');
        option.value = vendedor.id;
        option.text = `Vendedor: ${vendedor.nome}`;
        selectVendedor.appendChild(option);
      });
    } catch (error) {
      console.error(error);
    }
  }


function CadastrarCliente(){
    const nomeCliente = document.getElementById('txtcliente')
    console.log(nomeCliente.value)
    const emailCliente = document.getElementById('txtemail')
    console.log(emailCliente.value)
    const selectVendedor = document.getElementById('selectVendedor')
    console.log(selectVendedor.value)
    axios.post('http://localhost:8080/cliente', {
      nome: nomeCliente.value,
      email: emailCliente.value,
      idVendedor: selectVendedor.value
    })
      .then(response => {
        alert('Cliente cadastrado com sucesso!')
          window.location.href = `clientes_adm.html`
      })
      .catch(error => {
        alert("Erro ao cadastrar!")
        console.log(`Erro cadastro Planejamento: ${error}`)
      });
}

document.addEventListener('DOMContentLoaded', () => {
    carregarVendedores();
});