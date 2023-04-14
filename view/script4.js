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