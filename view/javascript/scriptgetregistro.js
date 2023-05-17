async function buscarRegistros() {
    try {
        const params = new URLSearchParams(window.location.search);
        const idPlanejamento = params.get('idPlanejamento');
        const idVendedor = params.get('idVendedor')
        const response = await axios.get(`http://localhost:8080/planejamento/${idPlanejamento}`);
        const planejamento = response.data;

        const selectRegistros = document.getElementById('tabela');

        planejamento.registros.forEach(registro => {

            const meses = [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ];

            const linhaRegistro = document.createElement('tr');
            const idRegistro = document.createElement('td')
            idRegistro.textContent = registro.id
            const quantidadeRegistro = document.createElement('td')
            quantidadeRegistro.textContent = registro.quantidade
            const diaRegistro = document.createElement('td')
            const diaRegistroAgora = registro.diaRegistro
            const partesDataDia = diaRegistroAgora.split("-");
            diaRegistro.textContent = `${partesDataDia[2]}/${partesDataDia[1]}/${partesDataDia[0]}`

            console.log(`vindo do banco dia -->>${registro.diaRegistro}`)
            console.log(`vindo do banco mes -->>${registro.mesPlanejamento}`)
            const mesRegistro = document.createElement('td')
            const mesRegistroAgora = registro.mesPlanejamento
            const partesDataMes = mesRegistroAgora.split("-");
            const mesFatiado = parseInt(partesDataMes[1], 10) - 1;
            mesRegistro.textContent = `${meses[mesFatiado]} de ${partesDataMes[0]}`

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
                    window.location.href = `edit_cad_plan.html?idRegistro=${registro.id}&idPlanejamento=${idPlanejamento}&diaRegistro=${registro.diaRegistro}&idVendedor=${idVendedor}`;
                } else {
                    alert("Tempo de Edição de 7 dias expirou!")
                }
            });

            const colunaBotaoExcluir = document.createElement('td')
            const botaoExcluir = document.createElement('button')
            botaoExcluir.type = 'button'
            botaoExcluir.classList.add('btn', 'btn-outline-danger')
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

                    const confirmacao = confirm("Tem certeza de que deseja excluir?");
                    if (confirmacao) {
                        axios.delete(`http://localhost:8080/registro_planejamento/${registro.id}`)
                            .then((response) => {
                                alert("Registro excluido com sucesso")
                                console.log(response.data);
                                location.reload();
                            })
                            .catch((erro) => {
                                console.error(erro);
                            });
                    }
                    //window.location.href = `edit_plan.html?id=${registro.id}&idPlanejamento=$//{idPlanejamento}&diaRegistro=${registro.diaRegistro}`;
                } else {
                    alert("Tempo de Exlusão de 7 dias expirou!")
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

function MostrarBotao() {
    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate()

    var diaLimite = 20

    const botaoAdcionar = document.getElementById("btnAdicionar")

    if (diaAtual <= diaLimite) {
        botaoAdcionar.style.display = "block"
    } else {
        botaoAdcionar.style.display = "none"
    }
}

function AdcionarRegistro() {
    const params = new URLSearchParams(window.location.search);
    const idPlanejamento = params.get('idPlanejamento');
    const idVendedor = params.get('idVendedor')

    window.location.href = `edit_cad_plan.html?idPlanejamento=${idPlanejamento}&idVendedor=${idVendedor}`;
}

document.addEventListener('DOMContentLoaded', () => {
    buscarRegistros()
    MostrarBotao()
});

function inputVendedorPlanejamento() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `index.html?idVendedor=${idVendedor}`;
}

function inputVendedorGerenciamento() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `visualizar_plan.html?idVendedor=${idVendedor}`;
}

function inputVendedorDashboard() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `dashboard.html?idVendedor=${idVendedor}`;
}

function inputVendedorCliente() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `clientes.html?idVendedor=${idVendedor}`;
}

function inputVoltar() {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    window.location.href = `visualizar_plan.html?idVendedor=${idVendedor}`;
}