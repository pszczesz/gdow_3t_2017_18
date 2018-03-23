window.onload = function (){
  document.getElementById("wykonaj").onclick = function (){
    var wzorzec = /^[A-Z]{1}[a-z]{2,}$/;
    var wzorzecKod = /^[\d]{2}-[\d]{3}$/;
    var imie = document.getElementById("imie");
    var nazwisko = document.getElementById("nazwisko");
    var kod = document.getElementById("kod");
    var okImie = Validate(imie,wzorzec,"Podaj poprawne imię");
    var okNazwisko = Validate(nazwisko,wzorzec,"Podaj poprawne nazwisko");
    var okKod = Validate(kod,wzorzecKod,"Podaj poprawny kod pocztowy");
    //TODO
  };  
};
function Validate(elem,wzorzec,text ){
    var value = elem.value;
    var next = elem.nextElementSibling;
    if(wzorzec.test(value)){
        next.innerHTML = "";
        return true;
    }else{
        next.innerHTML = text;
        return false;
    } 
}

