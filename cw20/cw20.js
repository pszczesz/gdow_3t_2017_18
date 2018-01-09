window.onload = start;

function start() {
    var dane = getDane();
    document.getElementById("wynik").innerHTML = generTab(dane);
    console.log(getSum(dane));
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
        tds[i].onmousedown = function (event) {
            switch (event.buttons) {
                case 1:
                    this.style.backgroundColor = "red";
                    break;
                case 2:
                    this.style.backgroundColor = "green";
                    break;
                case 4:
                    this.style.backgroundColor = "white";
                    break;
            }
        };
        tds[i].oncontextmenu = function (event) {
            event.preventDefault();
            return false;
        };
    }
}
function getDane() {
    return [
    ["Polska", "Warszawa", "38 476 269"],
    ["Rosja", "Moskwa", "142 257 519"],
    ["Niemcy", "Berlin", "80 594 017"],
    ["Francja", "Paryż", "67 106 161"],
    ["Hiszpania", "Madryt", "48 958 159"]
    ];
}
function getSum(dane){
    var suma=0;
    for(var i=0;i<dane.length;i++){
        suma += parseInt(dane[i][2].split(" ").join(""));
    }
    return suma;
}
function generTab(dane) {
    var html = "<table>";
    html += "<tr><th>Państwo</th><th>Stolica</th><th>Ludność</th></tr>";
    for (var i = 0; i < dane.length; i++) {
        html += "<tr><td>" + dane[i][0] + "</td><td>" + dane[i][1] +
                "</td><td>" + dane[i][2] + "</td></tr>";
    }
    return html + "</table>";
}

