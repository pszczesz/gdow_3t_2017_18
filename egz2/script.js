window.onload = function () {
    document.getElementById("oblicz").onclick = function () {
        var wyb = document.getElementById("news").checked;
        var ilosc = parseInt(document.getElementById("ilosc").value);
        var wynik = "";
        if (!isNaN(ilosc) && ilosc > 0) {          
            var bonus = wyb ? 0.2 : 0;            
            if (ilosc > 0 && ilosc <= 10) {
               wynik = (1 * ilosc - (bonus * ilosc)).toFixed(2);
            } else if (ilosc <= 50) {
                wynik = (0.8 * ilosc - (bonus * ilosc)).toFixed(2);
            } else {
                wynik = (0.8 * ilosc - (bonus * ilosc)).toFixed(2);
            }
        } else {
            wynik = "BRAK DANYCH";            
        }
        document.getElementById("wynik").innerHTML = wynik;
    };
};


