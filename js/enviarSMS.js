
onlyNumbersInInput();

$("#botao-enviar-sms").click(enviarSMS);

function enviarSMS() {

		setTimeout(function(){
			$("#spinner").toggle();
		},1500);

		var celularOrigem = $("#celular-origem").val();
		var mensagem = $(".campo-digitacao").val();
		var celularDestino = [];
		celularDestino.push($("#celular-destino").val());
		var novosNumerosDestino = document.querySelectorAll(".novoDestinarioNumero");
		for(var i = 0 ; i < novosNumerosDestino.length ; i++){
			celularDestino.push($(novosNumerosDestino[i]).val());
		}

		var datePicker = $(".datepicker").val();
		var sms={};
		sms["celularOrigem"] = celularOrigem;
		sms["mensagem"] = mensagem;
		sms["datePicker"] = datePicker;

		$("#spinner").toggle();

		for(var i = 0 ; i < celularDestino.length ; i ++){
			sms["celularDestino"] = celularDestino[i];
			$.ajax({
				 type: "POST",
				 url: "http://localhost:8080/enviarsms",
				 data: JSON.stringify(sms),
				 contentType: "application/json; charset=utf-8",
				 dataType: "json",
				 processData: true,
				 success: function (data, status, jqXHR) {
					 	buscaSmsId(data.id);
				 },
				 error: function (data, status, jqXHR) {
						sms["code"]=data.status;
						if(data.status == 0){
							sms["status"]="O servico-SMS esta desligado";
							inserePlacar(sms);
						}else{
							var responseObj = JSON.parse(data.responseText);
							buscaSmsId(responseObj.id);
						}
						$("#erro").toggle();
						setTimeout(function(){
			     		$("#erro").toggle();
			     	},1500);
				 }
		 });
		}
}
