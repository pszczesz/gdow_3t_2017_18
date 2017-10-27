
window.onload = start;


function start(){
    document.getElementById("generuj").onclick = klik;
}
function klik(){
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);
    console.log("rows="+rows+" cols="+cols);
    if(isNaN(rows) || isNaN(cols)){
        document.getElementById("wynik")
                .innerHTML = "Błędne dane";
        return;
    }
    rows = rows<=0 || rows>50 ? 20 : rows;
    cols = cols<=0 || cols>50 ? 20 : cols;
    document.getElementById("wynik")
            .innerHTML = RysujTab(rows,cols);
}
function RysujTab(rows,cols){
    var html = "<table>";    
    for(var i=1;i<=rows;i++){
        html += "<tr>";
        for(var j=1;j<=cols;j++){
            html += "<td>"+(i*j)+"</td>";
        }
        html += "</tr>";
    }    
    return html + "</table>";    
}