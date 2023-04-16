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


