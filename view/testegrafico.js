 axios.get('http://localhost:8080/planejamento/1')
  .then(function (response) {
    criarGrafico(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
  function criarGrafico(data) {
    
    
    var ctx = document.getElementById('meu-grafico').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: d,
        datasets: [{
          label: 'Meu gráfico de linha',
          data: data.valores,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  