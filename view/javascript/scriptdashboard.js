function drawChart() {
  const table = new google.visualization.DataTable();

  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');

  axios.get(`http://localhost:8080/registro/1`)
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

      table.addColumn('string', 'Meses');
      table.addColumn('number', 'Predição');
      table.addColumn('number', 'Planejado');
      table.addColumn('number', 'Realizado');

      registro.planejamentos.forEach((planejamento, index) => {
        const data = planejamento.mesPlanejamento
        console.log(`banco --->${planejamento.mesPlanejamento}`)
        const partesData = data.split("-");
        const dia = partesData[2];
        const mes = parseInt(partesData[1], 10) - 1;
        console.log(`mes -->${mes}`)
        const ano = partesData[0];
        const dataString = `${meses[mes]} de ${ano}`;
        console.log(`formadata --->${dataString}`)
        const quantidadePlanejamento = planejamento.quantidade;
        const quantidadeHistorico = registro.historicos[index].quantidade;
        const quantidadePredicao = registro.predicaos[index].quantidade;
        table.addRow([dataString, quantidadePredicao, quantidadePlanejamento, quantidadeHistorico]);
      });

      // Define as propriedades da coluna 0 para negrito
      table.setColumnProperty(0, 'style', 'font-weight:bold;');

      const options = {
        chart: {
          title: 'Gerenciamento das vendas',
          subtitle: ''
        },
        colors: ['#7128EB', '#EA8300', '#1AEB44'], // Cores das linhas do gráfico
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
      };

      const chart = new google.charts.Line(document.getElementById('linechart_material'));
      chart.draw(table, google.charts.Line.convertOptions(options));
    })
    .catch(error => {
      console.error(error);
    });
}
document.addEventListener('DOMContentLoaded', () => {
  // Elemento onde será renderizado o gráfico
  google.charts.load('current', { 'packages': ['line'] });
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);
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


