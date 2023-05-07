
async function buscarPlanejamento() {
  try {
    const response = await axios.get('http://localhost:8080/vendedor/1');
    const vendedor = response.data;

    const selectPlanejamentos = document.getElementById('tabela');

    vendedor.planejamentos.forEach(planejamento => {
      const linha = document.createElement('tr');
      const idPlanejamento = document.createElement('td')
      idPlanejamento.textContent = planejamento.id
      idPlanejamento.setAttribute('scope', 'row')
      const clientePlanejamento = document.createElement('td')
      clientePlanejamento.textContent = planejamento.cliente.nome
      const nomeProdutoPlanejamento = document.createElement('td')
      nomeProdutoPlanejamento.textContent = planejamento.produto.nome
      const colunaBotaoVerMais = document.createElement('td')
      const botaoVerMais = document.createElement('button')
      botaoVerMais.type = 'button'
      botaoVerMais.classList.add("btn", "btn-outline-dark")
      botaoVerMais.textContent = 'Ver Mais'
      botaoVerMais.addEventListener('click', () => {
        window.location.href = `visualizar_registro.html?id=${planejamento.id}`;
      });

      const colunaBotaoEditar = document.createElement('td')
      const botaoEditar = document.createElement('button')
      botaoEditar.type = 'button'
      botaoEditar.classList.add("btn", "btn-outline-dark")
      botaoEditar.textContent = 'Editar'
      const svgEditar = document.createElement('svg');
      svgEditar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svgEditar.setAttribute('width', '16');
      svgEditar.setAttribute('height', '16');
      svgEditar.setAttribute('fill', 'currentColor');
      svgEditar.setAttribute('class', 'bi bi-pencil');
      svgEditar.setAttribute('viewBox', '0 0 16 16');
      const path = document.createElement('path');
      path.setAttribute('d', 'M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z');

      const colunaBotaoExcluir = document.createElement('td');
      const botaoExcluir = document.createElement('button');
      botaoExcluir.type = 'button';
      botaoExcluir.textContent = 'Excluir'
      botaoExcluir.classList.add('btn', 'btn-outline-danger');
      const svgExcluir = document.createElement('svg');
      svgExcluir.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svgExcluir.setAttribute('width', '16');
      svgExcluir.setAttribute('height', '16');
      svgExcluir.setAttribute('fill', 'currentColor');
      svgExcluir.setAttribute('class', 'bi bi-trash');
      svgExcluir.setAttribute('viewBox', '0 0 16 16');
      const path1 = document.createElement('path');
      path1.setAttribute('d', 'M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z');
      const path2 = document.createElement('path');
      path2.setAttribute('d', 'M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z');

      svgEditar.appendChild(path);
      botaoEditar.appendChild(svgEditar)
      colunaBotaoEditar.appendChild(botaoEditar)
      colunaBotaoVerMais.appendChild(botaoVerMais)

      svgExcluir.appendChild(path1);
      svgExcluir.appendChild(path2);
      botaoExcluir.appendChild(svgExcluir);
      colunaBotaoExcluir.appendChild(botaoExcluir);
    
      linha.appendChild(idPlanejamento)
      linha.appendChild(clientePlanejamento)
      linha.appendChild(nomeProdutoPlanejamento)
      linha.appendChild(colunaBotaoVerMais)
      linha.appendChild(colunaBotaoEditar)
      linha.appendChild(colunaBotaoExcluir);

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


