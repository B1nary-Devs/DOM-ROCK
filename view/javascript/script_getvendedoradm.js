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
            botaoVisualizar.classList.add("btn-outline-primary");
            botaoVisualizar.addEventListener('click', async () => {
                const modal = document.getElementById('exampleModal');
                const divBody = document.getElementById('modalBody');

                const response = await axios.get(`http://localhost:8080/vendedor/${vendedor.id}`);
                const vendedorC = response.data;
                const divClientes = document.getElementById('atualizar');
                
                divClientes.remove()

                const divClientesNovo = document.createElement('div');
                divClientesNovo.id = 'atualizar'
                vendedorC.clientes.forEach(cliente => {
                    const link = document.createElement('a');
                    // Defina o texto do link
                    link.textContent = cliente.nome;
                    // Defina o atributo href do link
                    link.href = `edit_clientes.html?idVendedor=${vendedor.id}&idCliente=${cliente.id}`;
                    const br = document.createElement('br');
                    divClientesNovo.appendChild(link)
                    divClientesNovo.appendChild(br)
                })
                divBody.appendChild(divClientesNovo)
                var modalInstance = new bootstrap.Modal(modal);
                modalInstance.show();
            })
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