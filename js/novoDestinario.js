var novoDestinario = $("#cria-campos-novo-destinario");

novoDestinario.on("click", function(){
  var linha = insereNovaDIVRow();
  linha.find(".botao-remover-cel").click(removeLinha);
  $(".celular-mask").mask("(99) 9999?9-9999");
});

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent();
   linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}

function insereNovaDIVRow(){
  var divRow = $("<div>");
  var divFilhaNumber = $("<div>");
  var i_phone = $("<i>");
  var inputNumber = $("<input>");
  var labelnumber = $("<label>").text("Celular de Destino");

  divRow.addClass("row");

  divFilhaNumber.addClass("input-field col s10");
  i_phone.addClass("material-icons prefix active").text("phone");
  labelnumber.addClass("active");
  inputNumber.addClass("novoDestinarioNumero celular-mask");
  divFilhaNumber.append(i_phone);
  divFilhaNumber.append(inputNumber);
  divFilhaNumber.append(labelnumber);

  divRow.append(divFilhaNumber);

  var link = $("<a>").addClass("botao-remover-cel").attr("href",  "#");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
  link.append(icone);

  divRow.append(link);

  var div_addDestino = $("#addDestino");
  div_addDestino.append(divRow);

  return div_addDestino;
}
