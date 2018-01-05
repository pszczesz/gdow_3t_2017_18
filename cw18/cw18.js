window.onload = start;
function start() {
    document.getElementById("graj").onclick = gener;
}
function gener() {
    var rowsOK = Validate(document.getElementById("rows"));
    var colsOK = Validate(document.getElementById("cols"));
    if (rowsOK && colsOK) {
        var rows = parseInt(document.getElementById("rows").value);
        var cols = parseInt(document.getElementById("cols").value);
        document.getElementById("wynik").innerHTML = tabelka(rows, cols);
        var tds = document.getElementsByTagName("td");
        console.log(tds);

        for (var i = 0; i < tds.length; i++) {
            tds[i].onmousedown = function (event) {
                switch (event.buttons) {
                    case 1:
                        this.innerHTML = "<img src='x.png'/>";
                        break;
                    case 2:
                        this.innerHTML = "<img src='o.png'/>";
                        break;
                    case 4:
                        this.innerHTML = "";
                        break;
                }
            };
            tds[i].oncontextmenu = function (event) {
                event.preventDefault();
                return false;
            };
        }
        //document.getElementById("wynik").innerHTML = "Tabelka";
    } else {
        document.getElementById("wynik").innerHTML = "Brak tabelki";
    }
}
function tabelka(rows, cols) {
    var html = "<table>";
    for (var i = 0; i < rows; i++) {
        html += "<tr>";
        for (var j = 0; j < cols; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }
    return html + "</table>";
}
function Validate(elem) {
    var value = parseInt(elem.value);
    var next = elem.nextElementSibling;
    if (!isNaN(value) && value > 2 && value <= 50) {
        next.innerHTML = "";
        return true;
    } else {
        next.innerHTML = "Błedne dane lub poza zakresem między 3 i 50!";
        return false;
    }
}
