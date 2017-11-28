
window.onload = start;
var actual = 0;
var images = ["motyl0.png","motyl1.png","motyl2.png","motyl3.png",
               "motyl4.png","motyl5.png","motyl6.png","motyl7.png",
               "motyl8.png","motyl9.png"];
function start(){
  setInterval(losuj,5000);
  document.getElementById("up").onclick = goUp;
  document.getElementById("down").onclick = goDown;
}
function goUp(){
    actual = actual+1;
    if(actual>images.length-1) actual = 0;
    document.getElementById("obrazek")
             .setAttribute("src","imgs/"+images[actual]);
    document.getElementById("podpis").innerHTML = images[actual];
}
function goDown(){
    actual = actual-1;
    console.log(actual);
    if(actual<0) actual = images.length-1;
    document.getElementById("obrazek")
             .setAttribute("src","imgs/"+images[actual]);
    document.getElementById("podpis").innerHTML = images[actual];
}
function losuj(){
    actual = Math.floor(Math.random()*images.length);
    document.getElementById("obrazek")
            .setAttribute("src","imgs/"+images[actual]);
    document.getElementById("podpis").innerHTML = images[actual];
}



