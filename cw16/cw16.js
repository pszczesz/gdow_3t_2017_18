window.onload = start;

function start(){
    document.getElementById("dodaj").onclick = dodaj;
    document.getElementById("usun").onclick = usun;
}
function dodaj(){
    var tekst = document.getElementById("dane").value;
    if(tekst.trim()==""){
        document.getElementById("dane")
                .style.border = "solid 2px red";
    }else{
        document.getElementById("dane")
                .style.border = "solid thin black";
        var wynik = document.getElementById("wynik");
        var p = document.createElement("p");
        var textNode = document.createTextNode(tekst);
        p.appendChild(textNode);
        wynik.appendChild(p);
        console.log(wynik.childNodes);        
    }
}
function usun(){
    
    document.getElementById("wynik").innerHTML="";
}



