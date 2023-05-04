async function buscarRegistros() {
    try {
        const params = new URLSearchParams(window.location.search);
        const idPlanejamento = params.get('id');
        const response = await axios.get(`http://localhost:8080/planejamento/${idPlanejamento}`);
        const planejamento = response.data;

        const selectRegistros = document.getElementById('tabela');

        planejamento.registros.forEach(registro => {
            const linhaRegistro = document.createElement('tr');
            const idRegistro = document.createElement('td')
            idRegistro.textContent = registro.id
            const quantidadeRegistro = document.createElement('td')
            quantidadeRegistro.textContent = registro.quantidade
            const diaRegistro = document.createElement('td')
            diaRegistro.textContent = new Date(registro.diaRegisto).toLocaleDateString('pt-BR')

            const mesRegistro = document.createElement('td')
            mesRegistro.textContent = new Date(`${registro.mesPlanejamento}-01`).toLocaleDateString('pt-BR', {month: 'long', year: 'numeric'});
            

            const colunaBotao = document.createElement('td')
            const botao = document.createElement('button')
            botao.type = 'button'
            botao.classList.add("btn", "btn-outline-dark")
            botao.textContent = 'Editar'
            botao.addEventListener('click', () => {
                window.location.href = `edit_plan.html?id=${planejamento.id}`;
            });
            colunaBotao.appendChild(botao)
            linhaRegistro.appendChild(idRegistro)
            linhaRegistro.appendChild(mesRegistro)
            linhaRegistro.appendChild(quantidadeRegistro)
            linhaRegistro.appendChild(diaRegistro)
            linhaRegistro.appendChild(colunaBotao)
            selectRegistros.appendChild(linhaRegistro)
        });
    } catch (error) {
        console.error(error)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    buscarRegistros()
});