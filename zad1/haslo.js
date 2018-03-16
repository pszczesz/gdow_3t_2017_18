window.onload = start;

function start(){
    document.getElementById("sprawdz").onclick = sprawdz;
}
function sprawdz(){
    var password = document.getElementById("haslo").value;
    if(password==""){
        document.getElementById("wynik").innerHTML = "WPISZ HASŁO!!";
        document.getElementById("wynik").style.color = "red";
        return ;
    }
    var wz = /\d/;
    var wz2 = /[A-Z]+/;
    if(wz.test(password) && wz2.test(password) && password.length>=7){
        document.getElementById("wynik").innerHTML = "BARDZO DOBRE";
        document.getElementById("wynik").style.color = "green";
        return ;
    }
    if(wz.test(password) && password.length>=7){
        document.getElementById("wynik").innerHTML = "DOBRE";
        document.getElementById("wynik").style.color = "green";
        return ;
    }
    if(wz.test(password) && password.length>3){
        document.getElementById("wynik").innerHTML = "ŚREDNIE";
        document.getElementById("wynik").style.color = "blue";
        return ;
    }
        document.getElementById("wynik").innerHTML = "SŁABE";
        document.getElementById("wynik").style.color = "yellow";
        return ;
}

function czyCyfra(tekst){
    for(var i=0;i<tekst.length;i++){
        if(tekst[i]>='0' && tekst[i]<='9') return true;
    }
    return false;
}


