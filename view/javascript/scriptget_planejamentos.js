async function buscarPlanejamentos() {
    try {
        const params = new URLSearchParams(window.location.search);
        const idRegistro = params.get('idRegistro');
        const idVendedor = params.get('idVendedor')
        const response = await axios.get(`http://localhost:8080/registro/${idRegistro}`);
        const registro = response.data;

        const selectPlanejamentos = document.getElementById('tabela');

        registro.planejamentos.forEach(planejamento => {

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

            const linhaPlanejamento = document.createElement('tr');
            const idPlanejamento = document.createElement('td')
            idPlanejamento.textContent = planejamento.id
            const quantidadePlanejamento = document.createElement('td')
            quantidadePlanejamento.textContent = planejamento.quantidade
            const diaRegistro = document.createElement('td')
            const diaRegistroAgora = planejamento.diaRegistro
            const partesDataDia = diaRegistroAgora.split("-");
            diaRegistro.textContent = `${partesDataDia[2]}/${partesDataDia[1]}/${partesDataDia[0]}`

            console.log(`vindo do banco dia -->>${planejamento.diaRegistro}`)
            console.log(`vindo do banco mes -->>${planejamento.mesPlanejamento}`)
            const mesRegistro = document.createElement('td')
            const mesRegistroAgora = planejamento.mesPlanejamento
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
                var dataRegistroEditar = new Date(planejamento.diaRegistro);

                // Calcular a diferença em milissegundos
                var differenceInMs = diaAtual.getTime() - dataRegistroEditar.getTime();

                // Converter a diferença em dias
                var differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

                var diferencaEmMilissegundos = diaAtual.getTime() - dataRegistroEditar.getTime();
                var diferencaEmDias = diferencaEmMilissegundos / 86400000;
                if (differenceInDays <= 7) {
                    window.location.href = `edit_cad_plan.html?idRegistro=${idRegistro}&idPlanejamento=${planejamento.id}&diaRegistro=${planejamento.diaRegistro}&idVendedor=${idVendedor}`;
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
                var dataRegistroEditar = new Date(planejamento.diaRegistro);

                // Calcular a diferença em milissegundos
                var differenceInMs = diaAtual.getTime() - dataRegistroEditar.getTime();

                // Converter a diferença em dias
                var differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

                var diferencaEmMilissegundos = diaAtual.getTime() - dataRegistroEditar.getTime();
                var diferencaEmDias = diferencaEmMilissegundos / 86400000;
                if (differenceInDays <= 7) {

                    const confirmacao = confirm("Tem certeza de que deseja excluir?");
                    if (confirmacao) {
                        axios.delete(`http://localhost:8080/planejamento/${planejamento.id}`)
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
            linhaPlanejamento.appendChild(idPlanejamento)
            linhaPlanejamento.appendChild(mesRegistro)
            linhaPlanejamento.appendChild(quantidadePlanejamento)
            linhaPlanejamento.appendChild(diaRegistro)
            linhaPlanejamento.appendChild(colunaBotaoEditar)
            linhaPlanejamento.appendChild(colunaBotaoExcluir)
            selectPlanejamentos.appendChild(linhaPlanejamento)
        });
    } catch (error) {
        console.error(error)
    }
}

function MostrarBotao() {
    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate()

    var diaLimite = 30

    const botaoAdcionar = document.getElementById("btnAdicionar")

    if (diaAtual <= diaLimite) {
        botaoAdcionar.style.display = "block"
    } else {
        botaoAdcionar.style.display = "none"
    }
}

function AdcionarRegistro() {
    const params = new URLSearchParams(window.location.search);
    const idRegistro = params.get('idRegistro');
    const idVendedor = params.get('idVendedor')

    window.location.href = `edit_cad_plan.html?idRegistro=${idRegistro}&idVendedor=${idVendedor}`;
}

document.addEventListener('DOMContentLoaded', () => {
    buscarPlanejamentos()
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
    window.location.href = `visualizar_registros.html?idVendedor=${idVendedor}`;
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