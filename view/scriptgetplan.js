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
          window.location.href = `viasualizar_registro.html?id=${planejamento.id}`;
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

  $(function(){
    $("#tabela input").keyup(function(){       
        var index = $(this).parent().index(); /*index recebe como valor, a coluna que contém o input*/
        var nth = "#tabela td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase(); /*convertendo o texto para maiúsculo*/
        $("#tabela tbody tr").show();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){ 
                $(this).parent().hide(); /*retorna -1 se o valor informado não existir*/
            }
        });
    });
    
    $("#tabela input").blur(function(){
        $(this).val("");
    }); 
});


