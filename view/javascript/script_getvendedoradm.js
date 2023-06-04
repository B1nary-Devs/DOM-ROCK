async function carregarVendedores() {
    try {
        const response = await axios.get('http://localhost:8080/vendedor');
        const vendedores = response.data;

        const selectVendedor = document.getElementById('tabelaClientes');

        vendedores.forEach(vendedor => {
            const linha = document.createElement('tr');
            const idVendedor = document.createElement('td')
            idVendedor.textContent = vendedor.id
            const nomeVendedor = document.createElement('td')
            nomeVendedor.textContent = vendedor.nome
            const emailVendedor = document.createElement('td')
            emailVendedor.textContent = vendedor.email
            const colunaVisualizar = document.createElement('td')
            const botaoVisualizar = document.createElement('button')
            botaoVisualizar.type = 'button'
            botaoVisualizar.textContent = 'Visualizar'
            botaoVisualizar.classList.add("btn");
            botaoVisualizar.classList.add("btn-outline-primary");
            botaoVisualizar.addEventListener('click', async () => {
                const modal = document.getElementById('exampleModal');
                const divBody = document.getElementById('modalBody');

                const response = await axios.get(`http://localhost:8080/vendedor/${vendedor.id}`);
                const vendedorC = response.data;
                const divClientes = document.getElementById('atualizar');

                divClientes.remove()

                const divClientesNovo = document.createElement('div');
                divClientesNovo.id = 'atualizar'
                vendedorC.clientes.forEach(cliente => {
                    const link = document.createElement('a');
                    // Defina o texto do link
                    link.textContent = cliente.nome;
                    // Defina o atributo href do link
                    link.href = `edit_adm_clientes.html?idVendedor=${vendedor.id}&idCliente=${cliente.id}`;
                    const br = document.createElement('br');
                    divClientesNovo.appendChild(link)
                    divClientesNovo.appendChild(br)
                })
                divBody.appendChild(divClientesNovo)
                var modalInstance = new bootstrap.Modal(modal);
                modalInstance.show();
            })

            const colunaBotaoEditar = document.createElement('td')
            const botaoEditar = document.createElement('button')
            botaoEditar.type = 'button'
            botaoEditar.classList.add("btn", "btn-outline-dark")
            botaoEditar.textContent = 'Editar'
            botaoEditar.addEventListener('click', () => {
                window.location.href = `edit_adm_vendedores.html?idVendedor=${vendedor.id}`;
            })
            colunaBotaoEditar.appendChild(botaoEditar)

            colunaVisualizar.appendChild(botaoVisualizar)

            linha.appendChild(idVendedor)
            linha.appendChild(nomeVendedor)
            linha.appendChild(emailVendedor)
            linha.appendChild(colunaBotaoEditar)
            linha.appendChild(colunaVisualizar)
            selectVendedor.appendChild(linha);

        });


    } catch (error) {
        console.error(error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    carregarVendedores();
});

//filtro de busca
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
  