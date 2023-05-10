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
            diaRegistro.textContent = new Date(registro.diaRegistro).toLocaleDateString('pt-BR')

            console.log(`vindo do banco -->>${registro.diaRegistro}`)
            const mesRegistro = document.createElement('td')
            mesRegistro.textContent = new Date(`${registro.mesPlanejamento}`).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

            const hoje = new Date();
            const ano = hoje.getFullYear();
            const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
            const dia = hoje.getDate().toString().padStart(2, '0');
            const dataAtual = `${ano}-${mes}-${dia}`;
            console.log(dataAtual)


            const colunaBotaoEditar = document.createElement('td')
            const botaoEditar = document.createElement('button')
            botaoEditar.type = 'button'
            botaoEditar.classList.add("btn", "btn-outline-dark")
            botaoEditar.textContent = 'Editar'
            botaoEditar.addEventListener('click', () => {

                var diaAtual = new Date();
                var dataRegistroEditar = new Date(registro.diaRegistro);

                // Calcular a diferença em milissegundos
                var differenceInMs = diaAtual.getTime() - dataRegistroEditar.getTime();

                // Converter a diferença em dias
                var differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

                var diferencaEmMilissegundos = diaAtual.getTime() - dataRegistroEditar.getTime();
                var diferencaEmDias = diferencaEmMilissegundos / 86400000;
                if (differenceInDays < 7) {
                    window.location.href = `edit_plan.html?id=${registro.id}&idPlanejamento=${idPlanejamento}&diaRegistro=${registro.diaRegistro}`;
                } else {
                    alert("Tempo de Edição expirou!")
                }
            });

            const colunaBotaoExcluir = document.createElement('td')
            const botaoExcluir = document.createElement('button')
            botaoExcluir.type = 'button'
            botaoExcluir.classList.add("btn", "btn-outline-dark")
            botaoExcluir.textContent = 'Excluir'
            botaoExcluir.addEventListener('click', () => {

                var diaAtual = new Date();
                var dataRegistroEditar = new Date(registro.diaRegistro);

                // Calcular a diferença em milissegundos
                var differenceInMs = diaAtual.getTime() - dataRegistroEditar.getTime();

                // Converter a diferença em dias
                var differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

                var diferencaEmMilissegundos = diaAtual.getTime() - dataRegistroEditar.getTime();
                var diferencaEmDias = diferencaEmMilissegundos / 86400000;
                if (differenceInDays < 7) {

                    axios.delete(`http://localhost:8080/registro_planejamento/${registro.id}`)
                        .then((response) => {
                            alert("Registro excluido com sucesso")
                            console.log(response.data);
                            location.reload();
                        })
                        .catch((erro) => {
                            console.error(erro);
                        });
                    //window.location.href = `edit_plan.html?id=${registro.id}&idPlanejamento=$//{idPlanejamento}&diaRegistro=${registro.diaRegistro}`;
                } else {
                    alert("Tempo de Exlusão expirou!")
                }
            });

            colunaBotaoExcluir.appendChild(botaoExcluir)
            colunaBotaoEditar.appendChild(botaoEditar)
            linhaRegistro.appendChild(idRegistro)
            linhaRegistro.appendChild(mesRegistro)
            linhaRegistro.appendChild(quantidadeRegistro)
            linhaRegistro.appendChild(diaRegistro)
            linhaRegistro.appendChild(colunaBotaoEditar)
            linhaRegistro.appendChild(colunaBotaoExcluir)
            selectRegistros.appendChild(linhaRegistro)
        });
    } catch (error) {
        console.error(error)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    buscarRegistros()
});