window.onload = start;

function start() {
    document.getElementById("zegar").innerHTML = "Zegar: " + UpdateTime();
    var d = new Date();
    var miesiac = GetMiesiac(d);
    var dTyg = GetDzien(d);
    if(dTyg=="Niedziela") dTyg ="<span style='color:red'>Niedziela</span>";
    if(dTyg=="Sobota") dTyg ="<span style='color:green'>Sobota</span>";
    document.getElementById("miesiac").innerHTML=miesiac;
    document.getElementById("dzien").innerHTML = d.getDate();
    document.getElementById("dTyg").innerHTML = dTyg;
    document.getElementById("rok").innerHTML = d.getFullYear();
}
function GetDzien(d){
    var dni = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
    return dni[d.getDay()];
}
function GetMiesiac(d) {
    var m = d.getMonth() + 1;
    console.log(m);
    switch (m) {
        case 1:
            return "Styczeń";
        case 2:
            return "Luty";
        case 3:
            return "Marzec";
        case 4:
            return "Kwiecień";
        case 5:
            return "Maj";
        case 6:
            return "Czerwiec";
        case 7:
            return "Lipiec";
        case 8:
            return "Sierpień";
        case 9:
            return "Wrzesień";
        case 10:
            return "Październik";
        case 11:
            return "Listopad";
        case 12:
            return "Grudzień";
        default : return "Coś nie tak!!!";
    }
}
function UpdateTime() {
    var dateTime = new Date();
    //console.log(dateTime.toTimeString().split(' ')[0]);
    return dateTime.toTimeString().split(' ')[0];
}
setInterval(function () {
    document.getElementById("zegar").innerHTML = "Zegar: " + UpdateTime();
}, 1000);
