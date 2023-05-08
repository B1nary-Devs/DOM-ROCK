function login() {
    const username = document.getElementById('txtemail').value;
    const password = document.getElementById('txtsenha').value;

    axios.post('http://localhost:8080/login', {
        email: username,
        senha: password
    })
    .then(function (response) {
        console.log(response)
        console.log('Login successful');
        const userId = response.data.id;
        console.log(userId)
    })
    .catch(function (error) {
        console.log('Login failed');
        alert('Login failed. Please check your email and password and try again.');
    });




}