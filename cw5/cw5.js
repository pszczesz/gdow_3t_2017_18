window.onload = start;

function start(){
    document.getElementById("oblicz").onclick = run;
}
function run(){
    var liczba = 
            parseFloat(document.getElementById("liczba").value);
    var tempPocz = document.getElementById("tempPocz").value;
    var tempKon  = document.getElementById("tempKon").value;
    console.log(tempPocz);
    switch (tempPocz) {
        case 'cel':
            var wynik = ObliczCel(liczba,tempKon);
            break;
         case 'far':
            var wynik = ObliczFar(liczba,tempKon);
            break; 
        case 'kel':
            if(liczba>=0) var wynik = ObliczKel(liczba,tempKon);
            else var wynik = "Błędne dane w Kelwinach";
            break;
        default:            
            var wynik = "brak danych";
    }
    document.getElementById("wynik").innerHTML = wynik;
}
function ObliczCel(liczba,tempKon){
    switch(tempKon){
        case 'cel': return liczba; 
        case 'far': return 32+9/5 * liczba;
        case 'kel': return liczba+273;
        default : return "Błędne dane";
    }
}
function ObliczFar(liczba,tempKon){
     switch(tempKon){
        case 'cel': return 5/9(liczba-32); 
        case 'far': return liczba;
        case 'kel': return 5/9(liczba-32)+273;
        default : return "Błędne dane";
    }
}
function ObliczKel(liczba,tempKon){
     switch(tempKon){
        case 'cel': return liczba-273; 
        case 'far': return 32+9/5 * (liczba-273);
        case 'kel': return liczba;
        default : return "Błędne dane";
    }
}