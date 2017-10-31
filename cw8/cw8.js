
window.onload = start;


function start(){
    document.getElementById("generuj").onclick = klik;
}
function klik(){
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);
    var color = document.getElementById("kolor").value;
    console.log("rows="+rows+" cols="+cols+" kolor: "+color);
    if(isNaN(rows) || isNaN(cols)){
        document.getElementById("wynik")
                .innerHTML = "Błędne dane";
        return;
    }
    rows = rows<=0 || rows>50 ? 20 : rows;
    cols = cols<=0 || cols>50 ? 20 : cols;
    document.getElementById("wynik")
            .innerHTML = RysujTab(rows,cols);
    var tds = document.getElementsByTagName("td");
    console.log(tds);
    for(var i=0;i<tds.length;i++){
        //tds[i].style.border = "solid 1px "+color;
        tds[i].style.backgroundColor = color;
    }
}
function RysujTab(rows,cols){
    var html = "<table>";    
    for(var i=1;i<=rows;i++){
        html += "<tr>";
        for(var j=1;j<=cols;j++){
            var wyr = i==1 || j==1 ? " class='wyr'":"";
            html += "<td"+wyr+">"+(i*j)+"</td>";
        }
        html += "</tr>";
    }    
    return html + "</table>";    
}