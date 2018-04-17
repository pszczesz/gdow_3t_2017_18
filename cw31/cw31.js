window.onload = function () {
    document.getElementById("gener").onclick = function () {
        var n = parseInt(document.getElementById("n").value);
        if (!isNaN(n) && n > 0 && n <= 10) {
            document.getElementById("n").style = "border: solid grey 1px;";
            document.getElementById("wiel").innerHTML = generHtml(n);
        } else {
            document.getElementById("wiel").innerHTML ="";
            document.getElementById("n").style = "border: solid red 1px;";
            return;
        }
    };
};
function generHtml(n) {
    var html = "";
    for (var i = 0; i <= n; i++) {
        html += "<input type='text' id='a" + i + "'> x<sup>" + (n - i) 
                    + "</sup>";
       html +=i<n ? " + ": " = ";
    }
    html += "<div id='wybor'><label for='x'>x = </label><input type='text' id='x'>"
            + "<input type='button' id='oblicz' value='Oblicz'></div>";
    return html;
}

