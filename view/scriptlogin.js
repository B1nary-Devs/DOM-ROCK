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
        const idVendedor = response.data.id;
        console.log(idVendedor)
        window.location.href = `home.html?idVendedor=${idVendedor}`
    })
    .catch(function (error) {
        console.log(error);
        alert('Falha no login. Por favor, verifique seu e-mail e senha e tente novamente.');
    });




}