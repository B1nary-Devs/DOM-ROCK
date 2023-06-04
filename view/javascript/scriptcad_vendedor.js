function validaSenha() {
    if (document.getElementById("txtvendedor").value == "") {
        document.getElementById("txtvendedor").focus()
        alert("ATENÇÃO! Nome do vendedor não preenchido!")
        return false
    }

    if (document.getElementById("txtemail").value == "") {
        document.getElementById("txtemail").focus()
        alert("Atenção! e-mail do vendedor não preenchido!")
        return false
    }

    if (document.getElementById("txtsenha").value == "") {
        document.getElementById("txtsenha").focus()
        alert("Atenção! Senha não preenchida!")
        return false
    }

    if (document.getElementById("txtconfirmarsenha").value == "") {
        document.getElementById("txtconfirmarsenha").focus()
        alert("Atenção! Confirmar senha não preenchido!")
        return false
    }

    if (document.getElementById("txtsenha").value != document.getElementById("txtconfirmarsenha").value) {
        document.getElementById("txtsenha").focus()
        alert("ATENÇÃO! Senhas Não Conferem!")
        return false
    }
    return true
}

function CadastrarVendedor() {

    if (validaSenha()) {

        const nomeVendedor = document.getElementById('txtvendedor')
        const emailVendedor = document.getElementById('txtemail')
        const senhaVendedor = document.getElementById('txtsenha')
        axios.post('http://localhost:8080/vendedor', {
            nome: nomeVendedor.value,
            email: emailVendedor.value,
            senha: senhaVendedor.value,
            nivelAcesso: 'vendedor'
        })
            .then(response => {
                alert('Vendedor cadastrado com sucesso!')
                window.location.href = `vendedores_adm.html`
            })
            .catch(error => {
                alert("Erro ao Cadastrar!")
                console.log(`Erro cadastro Vendedor: ${error}`)
            });
    } else {
        return false
    }

}
