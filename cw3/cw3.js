
window.onload = start;

function start(){
    var pars = document.getElementsByTagName("p");
   // alert(pars[pars.length-1].innerText);
   // alert(pars[pars.length-1].innerHTML);
  // pars[1].innerHTML = "Tego jeszcze nie było";
  var tekst = prompt("Podaj nową treść: ");
  pars[2].innerHTML = tekst;
  pars[3].style.color = "red";
  pars[3].style.fontSize = "24px";
}

