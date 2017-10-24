window.onload = start;
function start(){
    document.getElementById("generuj").onclick = run;
    document.getElementById("generuj2").onclick = run2;
}
function run(){
   var liczba = parseInt(document.getElementById("liczba").value);
   if(!isNaN(liczba)){
       liczba = liczba<-100 || liczba>100 ? 100 : liczba;
       var pars = document.getElementsByTagName("p");
       for(var i=0;i<pars.length;i++){
           pars[i].style.margin = liczba+"px";
       }
   }else{
       alert("Błędne dane");
   }
}
function run2(){
   var rozmiar = parseInt(document.getElementById("rozmiar").value);
   if(!isNaN(rozmiar)){
       rozmiar = rozmiar<8 || rozmiar>45 ? 10 : rozmiar;
       var pars = document.getElementsByTagName("p");
       for(var i=0;i<pars.length;i++){
           pars[i].style.fontSize = rozmiar+"px";
       }
   }else{
       alert("Błędne dane");
   }
}
