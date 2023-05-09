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
        const vendedorId = response.data.id;
        console.log(vendedorId)
        window.location.href = `clientes.html?idVendedor=${vendedorId}`
    })
    .catch(function (error) {
        console.log(error);
        alert('Login failed. Please check your email and password and try again.');
    });




}