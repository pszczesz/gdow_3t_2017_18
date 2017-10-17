window.onload = start;

function start() {
    var wynik = document.getElementById("wynik");
    var przycisk = document.getElementById("wykonaj");
    przycisk.onclick = zatwierdz;
}
function zatwierdz() {
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var wiek = parseInt(document.getElementById("wiek").value);
    if (imie.trim() != "" && nazwisko.trim() != ""
            && !isNaN(wiek) && wiek>0) {
        wynik.innerHTML = "Witaj " + imie + " " + nazwisko
                + " twój wiek: " + wiek;
    } else {
        wynik.innerHTML = "Brak pełnych danych!!";
    }
}