async function buscarPlanejamento65464() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor/1');
      const vendedor = response.data;
  
      const selectPlanejamentos = document.getElementById('tabela');
  
      vendedor.planejamentos.forEach(planejamento => {
        const corpoGeralTabela = document.createElement('tbody');
        const cabecaPlanejamento = document.createElement('thead');
        cabecaPlanejamento.classList.add('tbl-accordion-header');

        const linhaPlanejamento = document.createElement('tr');
        linhaPlanejamento.classList.add('tbl-accordion-body')

        const idPlanejamento = document.createElement ('td')
        idPlanejamento.textContent = planejamento.id
        idPlanejamento.setAttribute('scope', 'row')
        const nomeclientePlanejamento = document.createElement ('td')
        nomeclientePlanejamento.textContent = planejamento.nomeCliente
        const nomeProdutoPlanejamento = document.createElement ('td')
        nomeProdutoPlanejamento.textContent = planejamento.nomeProduto
        nomeProdutoPlanejamento.setAttribute('colspan', 3);

        linhaPlanejamento.appendChild(idPlanejamento)
        linhaPlanejamento.appendChild(nomeclientePlanejamento)
        linhaPlanejamento.appendChild(nomeProdutoPlanejamento)
        cabecaPlanejamento.appendChild(linhaPlanejamento)

        const tbodyRegistro = document.createElement('tbody')
        tbodyRegistro.classList.add('tbl-accordion-body')
        const linhaRegistro = document.createElement('tr');
        const idCabecalho = document.createElement ('th')
        idCabecalho.textContent = 'ID'
        const dataCabecalho = document.createElement ('th')
        dataCabecalho.textContent = "Data Planejamento"
        const quantidadeCabecalho = document.createElement ('th')
        quantidadeCabecalho.textContent = "Quantidade"
        const mesCabecalho = document.createElement ('th')
        mesCabecalho.textContent = "Mês"
        mesCabecalho.setAttribute('colspan', 3);
        linhaRegistro.appendChild(idCabecalho)
        linhaRegistro.appendChild(dataCabecalho)
        linhaRegistro.appendChild(quantidadeCabecalho)
        linhaRegistro.appendChild(mesCabecalho)
        tbodyRegistro.appendChild(linhaRegistro)
        corpoGeralTabela.appendChild(tbodyRegistro)


        planejamento.registros.forEach(registro => {
          const linhainterna = document.createElement('tr');
          const idRegistro = document.createElement ('td')
          idRegistro.textContent = registro.id
          const quantidadeRegistro = document.createElement ('td')
          quantidadeRegistro.textContent = registro.quantidade
          const diaRegistro = document.createElement ('td')
          diaRegistro.textContent = registro.diaRegisto
          const mesRegistro = document.createElement ('td')
          mesRegistro.textContent = registro.mesPlanejamento
          linhainterna.appendChild(idRegistro)
          linhainterna.appendChild(quantidadeRegistro)
          linhainterna.appendChild(diaRegistro)
          linhainterna.appendChild(mesRegistro)
          tbodyRegistro.appendChild(linhainterna)
          corpoGeralTabela.appendChild(tbodyRegistro)
        });

        selectPlanejamentos.appendChild(corpoGeralTabela)
      });
    } catch (error) {
      console.error(error)
    }
  }

  //outra versão
  async function buscarPlanejamento2() {
    try {
      const response = await axios.get('http://localhost:8080/vendedor/1');
      const vendedor = response.data;
  
      const selectPlanejamentos = document.getElementById('tabela');
  
      vendedor.planejamentos.forEach(planejamento => {
        const corpoGeralTabela = document.createElement('tbody');
        const cabecaPlanejamento = document.createElement('thead');
        cabecaPlanejamento.classList.add('tbl-accordion-header');
  
        const linhaPlanejamento = document.createElement('tr');
        linhaPlanejamento.classList.add('tbl-accordion-body')
  
        const idPlanejamento = document.createElement('td');
        idPlanejamento.textContent = planejamento.id;
        idPlanejamento.setAttribute('scope', 'row');
        const nomeclientePlanejamento = document.createElement('td');
        nomeclientePlanejamento.textContent = planejamento.nomeCliente;
        const nomeProdutoPlanejamento = document.createElement('td');
        nomeProdutoPlanejamento.textContent = planejamento.nomeProduto;
        nomeProdutoPlanejamento.setAttribute('colspan', 3);
  
        linhaPlanejamento.appendChild(idPlanejamento);
        linhaPlanejamento.appendChild(nomeclientePlanejamento);
        linhaPlanejamento.appendChild(nomeProdutoPlanejamento);
        cabecaPlanejamento.appendChild(linhaPlanejamento);
  
        const tbodyRegistro = document.createElement('tbody');
        tbodyRegistro.classList.add('tbl-accordion-body');
        const linhaRegistro = document.createElement('tr');
        const idCabecalho = document.createElement('th');
        idCabecalho.textContent = 'ID';
        const dataCabecalho = document.createElement('th');
        dataCabecalho.textContent = "Data Planejamento";
        const quantidadeCabecalho = document.createElement('th');
        quantidadeCabecalho.textContent = "Quantidade";
        const mesCabecalho = document.createElement('th');
        mesCabecalho.textContent = "Mês";
        mesCabecalho.setAttribute('colspan', 3);
        linhaRegistro.appendChild(idCabecalho);
        linhaRegistro.appendChild(dataCabecalho);
        linhaRegistro.appendChild(quantidadeCabecalho);
        linhaRegistro.appendChild(mesCabecalho);
        tbodyRegistro.appendChild(linhaRegistro);
        corpoGeralTabela.appendChild(tbodyRegistro);
  
  
        planejamento.registros.forEach(registro => {
          const linhainterna = document.createElement('tr');
          const idRegistro = document.createElement('td');
          idRegistro.textContent = registro.id;
          const quantidadeRegistro = document.createElement('td');
          quantidadeRegistro.textContent = registro.quantidade;
          const diaRegistro = document.createElement('td');
          diaRegistro.textContent = registro.diaRegistro;
          const mesRegistro = document.createElement('td');
          mesRegistro.textContent = registro.mesPlanejamento;
          linhainterna.appendChild(idRegistro);
          linhainterna.appendChild(diaRegistro);
          linhainterna.appendChild(quantidadeRegistro);
          linhainterna.appendChild(mesRegistro);
          tbodyRegistro.appendChild(linhainterna);
        });
  
        corpoGeralTabela.appendChild(cabecaPlanejamento);
        selectPlanejamentos.appendChild(corpoGeralTabela);
      });
    } catch (error) {
      console.error(error);
    }
  }
  



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


