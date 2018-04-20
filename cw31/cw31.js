window.onload = function () {
    document.getElementById("gener").onclick = function () {
        var n = parseInt(document.getElementById("n").value);
        if (!isNaN(n) && n > 0 && n <= 10) {
            document.getElementById("n").style = "border: solid grey 1px;";
            document.getElementById("wiel").innerHTML = generHtml(n);
            document.getElementById("oblicz").onclick = function () {
                 var tab = getWspol(n);   
                 var x = parseFloat(document.getElementById("x").value);
                 var h = new Horner(tab,x);
                 console.log(h);
                 document.getElementById("result").innerHTML = h.oblicz();
            };
        } else {
            document.getElementById("wiel").innerHTML = "";
            document.getElementById("n").style = "border: solid red 1px;";
            return;
        }
    };
};
function getWspol(n){
    var wsp = [];
    for(var i=0;i<=n;i++){
        wsp.push(parseFloat(document.getElementById("a"+i).value));
    }
    return wsp;
}
function Horner(wsp, x) {
    this.wsp = wsp;
    this.x = x;
    this.oblicz = function () {
        return "To trza zrobić!!!..."
    };
}
function generHtml(n) {
    var html = "";
    for (var i = 0; i <= n; i++) {
        html += "<input type='text' id='a" + i + "'> x<sup>" + (n - i)
                + "</sup>";
        html += i < n ? " + " : " = <span id='result'></span>";
    }
    html += "<div id='wybor'><label for='x'>x = </label><input type='text' id='x'>"
            + "<input type='button' id='oblicz' value='Oblicz'></div>";
    return html;
}

