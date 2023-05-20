async function buscarRegistro() {
  try {
    //redireciona a tela com o vendedor logado
    const params = new URLSearchParams(window.location.search);
    const idVendedor = params.get('idVendedor');
    const response = await axios.get(`http://localhost:8080/vendedor/${idVendedor}`);
    const vendedor = response.data;

    const selectRegistros = document.getElementById('tabela');

    vendedor.registros.forEach(registro => {
      const linha = document.createElement('tr');
      const idPlanejamento = document.createElement('td')
      idPlanejamento.textContent = registro.id
      idPlanejamento.setAttribute('scope', 'row')
      const clientePlanejamento = document.createElement('td')
      clientePlanejamento.textContent = registro.cliente.nome
      const nomeProdutoPlanejamento = document.createElement('td')
      nomeProdutoPlanejamento.textContent = registro.produto.nome
      const colunaBotaoVerMais = document.createElement('td')
      const botaoVerMais = document.createElement('button')
      botaoVerMais.type = 'button'
      botaoVerMais.classList.add("btn", "btn-outline-dark")
      botaoVerMais.textContent = 'Ver Mais'
      botaoVerMais.addEventListener('click', () => {
        window.location.href = `visualizar_planejamentos.html?idRegistro=${registro.id}&idVendedor=${idVendedor}`;
      });

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
        if (differenceInDays <= 7) {

          window.location.href = `edit_plan.html.html?idPlanejamento=${registro.id}&idVendedor=${idVendedor}`;
        }

      })
      colunaBotaoEditar.appendChild(botaoEditar)
      colunaBotaoVerMais.appendChild(botaoVerMais)

      linha.appendChild(idPlanejamento)
      linha.appendChild(clientePlanejamento)
      linha.appendChild(nomeProdutoPlanejamento)
      linha.appendChild(colunaBotaoVerMais)
      linha.appendChild(colunaBotaoEditar)

      selectRegistros.appendChild(linha)
    });
  } catch (error) {
    console.error(error)
  }
}


document.addEventListener('DOMContentLoaded', () => {
  buscarRegistro()
});

//filtro de busca
function myFunction() {
  var input, filter, table, tr, td, i, j, txtValue, startRow;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabela");
  tr = table.getElementsByTagName("tr");
  startRow = table.querySelector("thead") ? 1 : 0; // Ignora a primeira linha se houver um thead
  for (i = startRow; i < tr.length; i++) {
    // Percorra todas as células de cada linha
    for (j = 0; j < tr[i].cells.length; j++) {
      td = tr[i].cells[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          // Sair do loop interno se encontrar uma célula correspondente
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function limparFiltro() {
  // Seleciona a tabela e o input de busca
  var table = document.getElementById('tabela');
  var input = document.getElementById('myInput');

  // Limpa o valor do input
  input.value = '';

  // Percorre todas as linhas da tabela
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var shouldDisplay = true;

    // Percorre todas as colunas da linha
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];
      var searchText = input.value.toLowerCase();
      var cellText = cell.textContent.toLowerCase();

      // Verifica se a célula contém o texto da busca
      if (cellText.indexOf(searchText) === -1) {
        shouldDisplay = false;
        break;
      }
    }

    // Define a exibição da linha
    row.style.display = shouldDisplay ? '' : 'none';
  }
}

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

function inputVendedorDashboard() {
  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');
  window.location.href = `dashboard.html?idVendedor=${idVendedor}`;
}

function inputVoltar() {
  const params = new URLSearchParams(window.location.search);
  const idVendedor = params.get('idVendedor');
  window.location.href = `index.html?idVendedor=${idVendedor}`;
}


