
window.onload = start;
var actual = 0;
var images = ["motyl0.png","motyl1.png","motyl2.png","motyl3.png",
               "motyl4.png","motyl5.png","motyl6.png","motyl7.png",
               "motyl8.png","motyl9.png"];
function start(){
  setInterval(losuj,2000);
}
function losuj(){
    actual = Math.floor(Math.random()*images.length);
    document.getElementById("obrazek")
            .setAttribute("src","imgs/"+images[actual]);
    document.getElementById("podpis").innerHTML = images[actual];
}



