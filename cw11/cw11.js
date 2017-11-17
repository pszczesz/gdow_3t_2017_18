window.onload = start;

function start() {
    var dane = [
        ["Polska", "Warszawa"],
        ["Rosja", "Moskwa"],
        ["Niemcy", "Berlin"],
        ["Francja", "Paryż"],
        ["USA", "Waszyngton"],
        ["Wielka Brytania", "Londyn"],
        ["Holandia", "Amsterdam"]
    ];
    var wylosowany = GenerPanstwo();
    document.getElementById("panstwo").innerHTML = dane[wylosowany][0];
    document.getElementById("wynik").innerHTML = GenerSelect();
    document.getElementById("sprawdz").onclick = klik;
    function klik() {
        var wybor = document.getElementById("stolica").value;
        if (wybor == wylosowany) {
            document.getElementById("rezultat")
                    .innerHTML = "Prawidłowa odpowiedź";
        } else {
            document.getElementById("rezultat")
                    .innerHTML = "Coś nie za bardzo z geografią";
        }
    }
    function GenerPanstwo() {
        var losowa = Math.floor(Math.random() * dane.length);
        console.log(losowa);
        return losowa;
    }
    function GenerSelect() {
        var html = "<select id='stolica'>";
        for (var i = 0; i < dane.length; i++) {
            html += "<option value='" + i + "'>" + dane[i][1] + "</option>";
        }
        return html + "</select>";
    }
}