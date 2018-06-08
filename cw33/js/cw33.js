
$(document).ready(
 function (){
      $("#btn1").click(
         function (){
             var dane = parseFloat($("#dane").val());  
             if(!isNaN(dane)){
                 $("#wynik").html(dane*2);
                 $("#dane").css("border", "solid 1px grey");
             }else{
                 $("#wynik").html("Błędne dane!!");
                 $("#dane").css("border", "solid 1px red");
             }
      });      
           
});
