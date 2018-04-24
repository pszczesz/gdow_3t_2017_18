window.onload = function (){
    document.getElementById("oblicz").onclick = function (){
        var wyb = document.getElementById("news").checked;
        var ilosc = parseInt(document.getElementById("ilosc").value);
        if(isNaN(ilosc)){ 
            document.getElementById("wynik").innerHTML = "BRAK DANYCH";
            return;
        }
        var bonus = wyb ? 0.2 : 0;
        if (ilosc<=0){
            document.getElementById("wynik").innerHTML = "BRAK DANYCH";
            return;
        }
        if(ilosc>0 && ilosc<=10){
           document.getElementById("wynik").innerHTML = 
                   (1* ilosc- (bonus*ilosc)).toFixed(2); 
        }else if(ilosc<=50){
           document.getElementById("wynik").innerHTML = 
                   (0.8* ilosc-(bonus*ilosc)).toFixed(2); 
        }else {
            document.getElementById("wynik").innerHTML = 
                    (0.8* ilosc-(bonus*ilosc)).toFixed(2);
        }
        
    };
};


