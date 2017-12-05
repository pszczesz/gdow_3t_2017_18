window.onload = start;
var prezenty = [
    ["Samochodzik",3.99],
    ["laleczka mała",9.99],
    ["samolot do sklejania", 12.89],
    ["laptop", 3800],
    ["rowerek na 3 kółkach",899.99],
    ["konsola PS4",1100]
];
function start(){
    document.getElementById("pobierz").onclick = Pobierz;
     document.getElementById("zatwierdz").onclick = Klik;
    document.getElementById("zatwierdz").style.display = "none";
}
function toList(){
    var html = "<ul>";
    for(var i=0;i<prezenty.length;i++){
        html += "<li><input type='checkbox' value='"
                +prezenty[i][0]+"'/>"+prezenty[i][0]+" w cenie: "
             +prezenty[i][1]+ "zł</li>";
    }
    html += "</ul>";
    return html;
}
function Pobierz(){
    document.getElementById("prezenty").innerHTML = toList();
    document.getElementById("zatwierdz").style.display = "inline-block";
}
function Klik(){
    document.getElementById("wynik").innerHTML = "Tu będą wybrane prezenty!!!";
}

