//var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var textoTamanhoMaximoPermitidoFinal=5;

$(function() {

    inicializaEscritaSMS();
    atualizaPlacar();

});

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
          //iconeConversa.removeClass("red-text");
          iconeConversa.addClass("green-text");
          campo.addClass("borda-verde");
          //campo.removeClass("borda-vermelha");
          //campo.removeClass("campo-desativado");
          textoTamanhoMaximoPermitidoFinal = 5 - qtdCaracteres ;
        }
        $("#contador-caracteres-restantes").text(textoTamanhoMaximoPermitidoFinal);
        $("#contador-caracteres").text(qtdCaracteres);
    });
}


/*function inicializaBorda() {
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var tamanhoDigitado = digitado.length;

        if (tamanhoDigitado > 5) {
          campo.addClass("borda-vermelha");
          campo.removeClass("borda-verde");

        } else {
          campo.addClass("borda-verde");
          campo.removeClass("borda-vermelha");
        }
    });
}*/

/*function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}*/

/*function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}*/
