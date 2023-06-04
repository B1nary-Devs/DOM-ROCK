async function EditarClientes() {

    const params = new URLSearchParams(window.location.search);
    const idCliente = params.get('idCliente');
    const idVendedor = params.get('idVendedor')

    const nomeCliente = document.getElementById('txtcliente')
    console.log(nomeCliente.value)
    const emailCliente = document.getElementById('txtemail')
    console.log(emailCliente.value)
    axios.put(`http://localhost:8080/cliente/${idCliente}`, {
        id: idCliente,
        idVendedor: idVendedor,
        nome: nomeCliente.value,
        email: emailCliente.value,
    })
        .then(response => {
            alert('Cliente Atualizado com sucesso!')
            window.location.href = `clientes_adm.html`
        })
        .catch(error => {
            alert("Erro ao cadastrar!")
            console.log(`Erro cadastro Cliente: ${error}`)
        });
}
