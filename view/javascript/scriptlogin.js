function login() {
    const username = document.getElementById('txtemail').value;
    const password = document.getElementById('txtsenha').value;

    axios.post('http://localhost:8080/login', {
        email: username,
        password: password
    })
    .then(function (response) {
        console.log(response)
        console.log('Login successful');
        const id = response.data.id;
        const nivelAcesso = response.data.nivelAcesso
        if(nivelAcesso == 'vendedor'){
            console.log(id)
            window.location.href = `clientes.html?idVendedor=${id}`
        } else{
            window.location.href = 'dasboard_adm.html'
        }

    })
    .catch(function (error) {
        console.log(error);
        alert('Falha no login. Por favor, verifique seu e-mail e senha e tente novamente.');
    });




}