async function carregarVendedores() {
    try {
        const response = await axios.get('http://localhost:8080/vendedor');
        const vendedores = response.data;

        const selectVendedor = document.getElementById('tabelaClientes');

        vendedores.forEach(vendedor => {
            const linha = document.createElement('tr');
            const idVendedor = document.createElement('td')
            idVendedor.textContent = vendedor.id
            const nomeVendedor = document.createElement('td')
            nomeVendedor.textContent = vendedor.nome
            const emailVendedor = document.createElement('td')
            emailVendedor.textContent = vendedor.email
            const colunaVisualizar = document.createElement('td')
            const botaoVisualizar = document.createElement('button')
            botaoVisualizar.type = 'button'
            botaoVisualizar.textContent = 'Visualizar'
            botaoVisualizar.classList.add("btn");
            botaoVisualizar.classList.add("btn-primary");

            colunaVisualizar.appendChild(botaoVisualizar)

            linha.appendChild(idVendedor)
            linha.appendChild(nomeVendedor)
            linha.appendChild(emailVendedor)
            linha.appendChild(colunaVisualizar)

            selectVendedor.appendChild(linha);
        });
    } catch (error) {
        console.error(error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    carregarVendedores();
});