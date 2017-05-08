$("#botao-enviar-sms").click(enviarSMS);

function enviarSMS() {

		setTimeout(function(){
			$("#spinner").toggle();
		},1500);

		var celularOrigem = $("#celular-origem").val();
		celularOrigem = celularOrigem.replace(/[^0-9\.]/g,'');

		var mensagem = $(".campo-digitacao").val();

		var celularDestinoArray = [];

		var numerosDestinos = document.querySelectorAll(".novoDestinarioNumero");
		for(var i = 0 ; i < numerosDestinos.length ; i++){
			celularDestinoArray.push($(numerosDestinos[i]).val().replace(/[^0-9\.]/g,''));
		}

		var datePicker = $(".datepicker").val();
		var sms={};
		sms["celularOrigem"] = celularOrigem;
		sms["mensagem"] = mensagem;
		sms["datePicker"] = datePicker;

		$("#spinner").toggle();

		for(var i = 0 ; i < celularDestinoArray.length ; i ++){
			sms["celularDestino"] = celularDestinoArray[i];
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
