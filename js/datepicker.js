var mostrarData = $("#filled-in-box");

mostrarData.on("click", function(){

  var elem = $("#filled-in-box");
  if ( $( elem ).is( ":checked" ) ){
    $('#testDate').toggle("datenone");
      $('.datepicker').pickadate({
        format: 'dd-mm-yyyy',
        formatSubmit: 'dd-mm-yyyy'
    });

  }else{
    $(".datepicker").val("");
    $('#testDate').toggle("datenone");
  }
});
