$(function($) {
    inicializaEscritaSMS();
    atualizaPlacar();
    $(".celular-mask").mask("(99) 9999?9-9999");
});

var campo = $(".campo-digitacao");
var textoTamanhoMaximoPermitidoFinal=5;
function inicializaEscritaSMS() {

  campo.on("input", function() {
        var conteudo = campo.val();
        var qtdCaracteres = conteudo.length;
        var alinkEnviar = $("#botao-enviar-sms");
        var iconeConversa = $("#icone-conversa");

        if(qtdCaracteres > 5)
        {
            iconeConversa.removeClass("yellow-text");
            iconeConversa.removeClass("green-text");
            iconeConversa.addClass("red-text");
            campo.addClass("campo-desativado");
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
            alinkEnviar.addClass("disabled");
            textoTamanhoMaximoPermitidoFinal=0;
            $("#contador-caracteres-restantes").text(textoTamanhoMaximoPermitidoFinal);
        }
        else if(qtdCaracteres == 5)
        {
            iconeConversa.removeClass("green-text");
            iconeConversa.removeClass("red-text");
            iconeConversa.addClass("yellow-text");

            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
            campo.removeClass("campo-desativado");
            alinkEnviar.removeClass("disabled");
            textoTamanhoMaximoPermitidoFinal=0;
            $("#contador-caracteres-restantes").text(textoTamanhoMaximoPermitidoFinal);

        }
        else if(qtdCaracteres < 5)
        {
          iconeConversa.removeClass("yellow-text");
          iconeConversa.addClass("green-text");
          campo.addClass("borda-verde");
          textoTamanhoMaximoPermitidoFinal = 5 - qtdCaracteres ;
        }
        $("#contador-caracteres-restantes").text(textoTamanhoMaximoPermitidoFinal);
        $("#contador-caracteres").text(qtdCaracteres);
    });
}
