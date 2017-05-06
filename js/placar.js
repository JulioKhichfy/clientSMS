$("#botao-placar").click(mostraPlacar);

function inserePlacar(data) {
    var corpoTabela = $(".placar").find("tbody");
    var id = data.id;
    var celularOrigem = data.celularOrigem;
    var mensagem = data.mensagem;
    var celularDestino = data.celularDestino;
    var datapicker= data.datePicker;
    var status= data.status;
    var statuscode= data.statusCode;

    var linha = novaLinha(id, celularOrigem, celularDestino, mensagem, datapicker, status, statuscode);
    linha.find(".botao-remover").click(removeLinhaTabela);
    corpoTabela.append(linha);
    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function novaLinha(id, celularOrigem, celularDestino, mensagem, datapicker, status, statuscode) {
    var linha = $("<tr>");
    var colunaId = $("<td hidden id='sms_id'>").text(id);
    var colunaCelularOrigem = $("<td>").text(celularOrigem);
    var colunaMensagem = $("<td>").text(mensagem);
    var colunaCelularDestino = $("<td>").text(celularDestino);
    var colunaDatapicker = $("<td>").text(datapicker);
    var colunaStatus = $("<td>").text(status);
    var colunaStatusCode = $("<td>").text(statuscode);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaId);
    linha.append(colunaCelularOrigem);
    linha.append(colunaCelularDestino);
    linha.append(colunaMensagem);
    linha.append(colunaDatapicker);
    linha.append(colunaStatus);
    linha.append(colunaStatusCode);
    linha.append(colunaRemover);

    return linha;
}

function removeLinhaTabela() {

    event.preventDefault();
    var linha = $(this).parent().parent();
    var id = $(linha).find("#sms_id").text();

    $.ajax({
      url : "http://localhost:8080/delete/"+id,
      type : "delete"
    });

    linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}

function buscaSmsId(dataId){
  var url = 'http://localhost:8080/enviados/'+dataId;
	$.get(url).then(function (data,success){
      inserePlacar(data);
    });
}

function atualizaPlacar(){
    var corpoTabela = $(".placar").find("tbody");
    $.get("http://localhost:8080/enviados",function(data,status,jqXHR){
        $(data).each(function(){
            var linha = novaLinha(this.id, this.celularOrigem, this.celularDestino, this.mensagem, this.datePicker,this.status,this.statusCode);
            linha.find(".botao-remover").click(removeLinhaTabela);
            $("tbody").append(linha);
            corpoTabela.append(linha);
        });
    });
    $(".placar").slideDown(1500);
}
