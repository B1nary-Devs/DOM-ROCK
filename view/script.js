async function carregarAnimais(){
    const response = await axios.get('http://localhost:8000/animais')
    const animais = response.data;

    const lista = window.document.getElementById("lista-animais")

    lista.innerHTML = ''

    animais.forEach(animal => {
        const item = document.createElement('li')
        item.innerText = `Animal: ${animal.nome} - Idade: ${animal.idade} - Sexo: ${animal.sexo} - Cor: ${animal.cor}`

        lista.appendChild(item)
    })
}

async function cadastrar(){
    const nomeAnimal = document.getElementById("txtnome")
    const idadeAnimal = document.getElementById("txtidade")
    const corAnimal = document.getElementById("txtcor")
    const sexoAanimal = document.getElementById("txtsexo")

     await axios.post('http://localhost:8000/animais',{
        nome: nomeAnimal.value,
        idade: idadeAnimal.value,
        sexo: sexoAanimal.value,
        cor: corAnimal.value
    })
    carregarAnimais()
}



app()