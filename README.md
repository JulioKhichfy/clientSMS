# Cliente SMS Send #

	Esse Módulo poderá ser executado simplesmente no seu navegador de preferência.
	Para tal abra o arquivo principal.html em seu navegador.
	Sua responsabilidade é enviar requisições (mensagens SMS) ao módulo servicoSMS e receber o status da ação pretendida.

## 2: Execucao ##

	# Utilizando o navegador Chrome #
	1- Abra o arquivo principal.html em seu navegador.

	2- Preencha o formulário de envio de sms

		2.1 - Para ser enviado com sucesso:
					Todo numero deve ter 11 dígitos incluindo o prefixo.
					A mensagem não pode ser vazia.
					A data não pode ser futura.

						exemplo: (21)8868-63704

		2.2 - Para ser invalidado com numero não encontrado.
					Todo numero que começa com '9' depois do prefixo será inválidado.

						exemplo: (21)9969-63704

		2.3 - Todo SMS com mensagem vazia também será invalidado.

		2.4 - Todo SMS com numeros de destino e/ou origem que possuam tamanho menor que 11 serão inválidado.

		2.5 - Requisições com a operadora móvel desligada deve informar "operadora móvel desligada".
					Desligue a operadora móvel e dummy e faça uma requisição qualquer para verificar.

		2.6 - Requisições com Serviço-SMS desligado deve informar "Serviço SMS desligado".
					Desligue o Serviço-SMS e faça uma requisição qualquer para verificar.
