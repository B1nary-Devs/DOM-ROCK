async function carregarRegistros() {
  try {
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    const response = await axios.get(`http://localhost:8080/vendedor/${idVendedor}`);
    const vendedor = response.data;

    const selectClientes = document.getElementById('selectRegistros');

    vendedor.registros.forEach(registro => {
      const option = document.createElement('option');
      option.value = registro.id;
      console.log(`id do registro --->${registro.id}`)
      option.text = `Cliente:${registro.cliente.nome} - Produto:${registro.produto.nome}`;
      selectClientes.appendChild(option);
    })
  } catch (error) {
    console.error(error);
  }
}


function DesenhaGraficoLinhas(registro) {
  const graficoLinhas = new google.visualization.DataTable();

  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');

  axios.get(`http://localhost:8080/registro/${registro}`)
    .then(response => {
      const registro = response.data;
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

      graficoLinhas.addColumn('string', 'Meses');
      graficoLinhas.addColumn('number', 'Predição');
      graficoLinhas.addColumn('number', 'Planejado');
      graficoLinhas.addColumn('number', 'Realizado');

      registro.planejamentos.forEach((planejamento, index) => {
        const dataTabela = planejamento.mesPlanejamento
        console.log(`banco --->${planejamento.mesPlanejamento}`)
        const partesData = dataTabela.split("-");
        const dia = partesData[2];
        const mes = parseInt(partesData[1], 10) - 1;
        console.log(`mes -->${mes}`)
        const ano = partesData[0];
        const dataString = `${meses[mes]} de ${ano}`;
        console.log(`formadata --->${dataString}`)
        const quantidadePlanejamento = planejamento.quantidade;
        const quantidadeHistorico = registro.historicos[index].quantidade;
        const quantidadePredicao = registro.predicaos[index].quantidade;
        graficoLinhas.addRow([dataString, quantidadePredicao, quantidadePlanejamento, quantidadeHistorico]);
      });

      const lineChart = new google.visualization.ChartWrapper({
        chartType: 'Line',
        containerId: 'linechart_material',
        
        options: {
          chart: {
            title: 'Gerenciamento das vendas',
            subtitle: ''
          },
          colors: ['#7128EB', '#EA8300', '#1AEB44'],
          legend: {
            textStyle: {
              fontName: 'Arial',
              fontSize: 18,
              color: 'black'
            }
          },
          titleTextStyle: {
            fontSize: 18,
            italic: true,
            bold: true,
            color: 'black'
          },
          vAxis: {
            textStyle: {
              fontName: 'Arial',
              fontSize: 16,
              color: 'black'
            }
          },
          hAxis: {
            textStyle: {
              fontName: 'Arial',
              fontSize: 16,
              color: 'black'
            }
          }
        }
      });
      
      var categoryPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'categoryPicker_div',
        'options': {
          'filterColumnIndex': 0,
          'ui': {
            'labelStacking': 'vertical',
            'label': 'Filtro:',
            'allowTyping': false,
            'allowMultiple': false
          }
        }
      })
      var table = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'table_div',
        'options': {
        }
      });
  

      const dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
      
      dashboard.bind([categoryPicker], [lineChart,table]);
      dashboard.draw(graficoLinhas);
    })
    .catch(error => {
      console.error(error);
    });
}

// Restante do seu código...

function DadosRegistros() {
  var registro = document.getElementById("selectRegistros").value;
  DesenhaGraficoLinhas(registro);
}

document.addEventListener('DOMContentLoaded', () => {
  carregarRegistros();
  google.charts.load('current', { 'packages': ['line', 'corechart', 'table', 'gauge', 'controls'] });

  document.getElementById("selectRegistros").addEventListener("input", DadosRegistros);
});

function inputVendedorCliente() {
  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');
  window.location.href = `clientes.html?idVendedor=${idVendedor}`;
}

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
