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
                +prezenty[i][0]+"'  name='prezenty'/>"+prezenty[i][0]+" w cenie: "
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
    var gifts = document.getElementsByName("prezenty");
    console.log(gifts);
    var html = "<ul>";
    var suma=0;
    for(var i=0;i<gifts.length;i++){
        if(gifts[i].checked){
            html += ("<li>"+prezenty[i][0]+ " w cenie: "+prezenty[i][1]+"zł </li>");
            suma += prezenty[i][1];
        }
    }
    html += "</ul><hr><p>Całkowita cena: "+suma+"zł</p>";
    document.getElementById("wynik").innerHTML = html;
}

