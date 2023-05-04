//codigo atual
  async function buscarPlanejamento() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor/1');
      const vendedor = response.data;
  
      const selectPlanejamentos = document.getElementById('tabela');
  
      vendedor.planejamentos.forEach(planejamento => {
        const linha = document.createElement('tr');
        const idPlanejamento = document.createElement ('td')
        idPlanejamento.textContent = planejamento.id
        idPlanejamento.setAttribute('scope', 'row')
        const clientePlanejamento = document.createElement ('td')
        clientePlanejamento.textContent = planejamento.cliente.nome
        const nomeProdutoPlanejamento = document.createElement ('td')
        nomeProdutoPlanejamento.textContent = planejamento.produto.nome
        const colunaBotao = document.createElement('td')
        const botao = document.createElement('button')
        botao.type = 'button'
        botao.classList.add("btn", "btn-outline-dark")
        botao.textContent = 'Ver Mais'
        botao.addEventListener('click', () => {
          window.location.href = `visualizar_registro.html?id=${planejamento.id}`;
        });
        colunaBotao.appendChild(botao)
        linha.appendChild(idPlanejamento)
        linha.appendChild(clientePlanejamento)
        linha.appendChild(nomeProdutoPlanejamento)
        linha.appendChild(colunaBotao)
        selectPlanejamentos.appendChild(linha)
      });
    } catch (error) {
      console.error(error)
    }
  }


  document.addEventListener('DOMContentLoaded', () => {
    buscarPlanejamento()
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


