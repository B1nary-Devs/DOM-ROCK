async function inserirRegistrosFicticios() {
    try {
        const params = new URLSearchParams(window.location.search);
        const idVendedor = params.get('idVendedor');
        const response = await axios.get(`http://localhost:8080/vendedor/${idVendedor}`);
        const vendedor = response.data;

        const registrosFicticios = [
            {
                id: 1,
                cliente: { nome: "Cliente 1" },
                produto: { nome: "Produto 1" }
            },
            {
                id: 2,
                cliente: { nome: "Cliente 2" },
                produto: { nome: "Produto 2" }
            },
            {
                id: 3,
                cliente: { nome: "Cliente 3" },
                produto: { nome: "Produto 3" }
            }
        ];

        const selectClientes = document.getElementById('selectRegistros');

        registrosFicticios.forEach(registro => {
            const option = document.createElement('option');
            option.value = registro.id;
            option.text = `Cliente:${registro.cliente.nome} - Produto:${registro.produto.nome}`;
            selectClientes.appendChild(option);
        })
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inserirRegistrosFicticios();
    // Restante do seu código...
});
