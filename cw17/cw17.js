window.onload = start;
function start(){
    document.getElementById("gener").onclick = klik;
}
function klik(){
    var rowsElement = document.getElementById("rows");
    var colsElement =document.getElementById("cols");
    var rowsOK = Validate(rowsElement);
    var colsOK  = Validate(colsElement);
    if(rowsOK && colsOK){
        document.getElementById("wynik").innerHTML = GenerTab(rowsElement.value,colsElement.value);
    }else{
         document.getElementById("wynik").innerHTML = "";
    }
}
function GenerTab(rows, cols){
    return "TODO tableka o wymiarach: ("+rows+","+cols+")";
}
function Validate(element){
    var value = parseInt(element.value);
    console.log(element);
    if(!isNaN(value) && value>1 && value<=30 ){
        element.nextElementSibling.innerHTML = "";
        return true;
    }else{
        element.nextElementSibling.innerHTML = "Błędne dane!!!";
        return false;
    }
}
