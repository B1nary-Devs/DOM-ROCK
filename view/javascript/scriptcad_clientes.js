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


async function CadastrarCliente(){
    const nomeCliente = document.getElementById('txtcliente')
    const emailCliente = document.getElementById('txtemail')
    const selectVendedor = document.getElementById('selectVendedor')
    await axios.post('http://localhost:8080/cliente', {
      nome: nomeCliente,
      email: emailCliente,
      idVendedor: selectVendedor
    })
      .then(response => {
        alert('Cliente cadastrado com sucesso!')
        sleep(300).then(() => {
          window.location.href = `clientes_adm.html`
        });
      })
      .catch(error => {
        alert("Erro ao cadastrar!")
        console.log(`Erro cadastro Planejamento: ${error}`)
      });


}

document.addEventListener('DOMContentLoaded', () => {
    carregarVendedores();
});