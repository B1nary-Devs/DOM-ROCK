async function buscarPlanejamento() {
    try {
      const response = await axios.get('http://localhost:8080/planejamento');
      const planejamentos = response.data;
  
      const selectPlanejamentos = document.getElementById('tabela');
  
      planejamentos.forEach(planejamento => {
        const linha = document.createElement('tr');
        const idPlanejamento = document.createElement ('th')
        idPlanejamento.textContent = planejamento.id
        idPlanejamento.setAttribute('scope', 'row')
        const clientePlanejamento = document.createElement ('td')
        clientePlanejamento.textContent = planejamento.nomeCliente
        const nomeProdutoPlanejamento = document.createElement ('td')
        nomeProdutoPlanejamento.textContent = planejamento.nomeProduto
        const quantidadePlanejamento = document.createElement ('td')
        quantidadePlanejamento.textContent = planejamento.quantidade
        const dataPlanejamento = document.createElement ('td')
        dataPlanejamento.textContent = planejamento.dia
        const botaoEditar = document.createElement('td')
        const linkbotao = document.createElement('a')
        const botao = document.createElement('button')
        botao.type = 'button'
        botao.classList.add("btn", "btn-outline-dark")
        botao.textContent = 'Editar'
        linkbotao.appendChild(botao)
        botaoEditar.appendChild(linkbotao)
        linha.appendChild(idPlanejamento)
        linha.appendChild(clientePlanejamento)
        linha.appendChild(nomeProdutoPlanejamento)
        linha.appendChild(quantidadePlanejamento)
        linha.appendChild(dataPlanejamento)
        linha.appendChild(botaoEditar)
        selectPlanejamentos.appendChild(linha)
      });
    } catch (error) {
      console.error(error)
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    buscarPlanejamento()
  });

  
  function myFunction() {
    var input, filter, table, tr, td, i, j, accordion;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      if (td.length) {
        if (tr[i].classList.contains("tbl-accordion-header")) {
          accordion = tr[i].nextElementSibling;
        }
        var found = false;
        for (j = 0; j < td.length; j++) {
          var txtValue = td[j].textContent || td[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            found = true;
            break;
          }
        }
        if (found) {
          tr[i].style.display = "";
          if (accordion) {
            accordion.style.display = "";
          }
        } else {
          tr[i].style.display = "none";
          if (accordion) {
            accordion.style.display = "none";
          }
        }
      }
    }
  }

  
  $(document).ready(function () {
    $('.tbl-accordion-header').click(function () {
        $(this).next('.tbl-accordion-body').slideToggle();
    });
});

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


