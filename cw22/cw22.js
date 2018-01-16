window.onload = start;
function start(){
    document.getElementById("data").valueAsDate = new Date();
    document.getElementById("show").onclick = Show;
    document.getElementById("wykonaj").onclick = Wykonaj;
}
function Wykonaj(){
    var color = document.getElementById("color").value;
    var data = document.getElementById("data").value;
    var wynik = document.getElementById("wynik");
    wynik.innerHTML = data;
    wynik.style.color = color;
}
function Show(){
    var elem = document.getElementById("show");
    if(elem.checked){
        document.getElementById("wynik").style.display = "inline-block";
        document.getElementById("wykonaj").disabled = false;
    }else{
         document.getElementById("wynik").style.display = "none";
         document.getElementById("wykonaj").disabled = true;
    }
}