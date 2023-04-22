async function CarregarCarteiraClientes() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor/1');
      const vendedor = response.data;
  
      const selectClientes = document.getElementById('tabelaClientes');
  
      vendedor.clientes.forEach(cliente => {
        const linha = document.createElement('tr');
        const idCliente = document.createElement ('td')
        idCliente.textContent = cliente.id
        const nomeCliente = document.createElement ('td')
        nomeCliente.textContent = cliente.nome
        const emailCliente = document.createElement ('td')
        emailCliente.textContent = cliente.email
        linha.appendChild(idCliente)
        linha.appendChild(nomeCliente)
        linha.appendChild(emailCliente)
        selectClientes.appendChild(linha)
      });
    } catch (error) {
      console.error(error)
    }
  }

  function myFunction() {
    var input, filter, table, tr, td, i, j, txtValue, startRow;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelaClientes");
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
    var table = document.getElementById('tabelaClientes');
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