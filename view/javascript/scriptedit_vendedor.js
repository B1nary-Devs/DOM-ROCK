function validaSenha() {
    if (document.getElementById("edtvendedor").value == "") {
        document.getElementById("edtvendedor").focus()
        alert("ATENÇÃO! Nome do vendedor não preenchido!")
        return false
    }

    if (document.getElementById("edttemail").value == "") {
        document.getElementById("edttemail").focus()
        alert("Atenção! e-mail do vendedor não preenchido!")
        return false
    }

    if (document.getElementById("edtsenha").value == "") {
        document.getElementById("edtsenha").focus()
        alert("Atenção! Senha não preenchida!")
        return false
    }

    if (document.getElementById("edtconfirmarsenha").value == "") {
        document.getElementById("edtconfirmarsenha").focus()
        alert("Atenção! Confirmar senha não preenchido!")
        return false
    }

    if (document.getElementById("edtsenha").value != document.getElementById("edtconfirmarsenha").value) {
        document.getElementById("edtsenha").focus()
        alert("ATENÇÃO! Senhas Não Conferem!")
        return false
    }
    return true
}

function EditarVendedor() {

    if (validaSenha()) {

        const params = new URLSearchParams(window.location.search);
        const idVendedor = params.get('idVendedor');

        const nomeVendedor = document.getElementById('edtvendedor')
        const emailVendedor = document.getElementById('edttemail')
        const senhaVendedor = document.getElementById('edtsenha')
        axios.put(`http://localhost:8080/vendedor/${idVendedor}`, {
            id: idVendedor,
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
                console.log(`Erro cadastro Edit: ${error}`)
            });
    } else {
        return false
    }

}