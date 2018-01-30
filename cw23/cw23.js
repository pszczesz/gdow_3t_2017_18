window.onload = start;
function start(){
    SetColrForBody();
    document.getElementById("r").onchange = function (){
        this.nextElementSibling.innerHTML = this.value;
        SetColrForBody();
    };
    document.getElementById("g").onchange = function (){
         this.nextElementSibling.innerHTML = this.value;
         SetColrForBody();
    };
    document.getElementById("b").onchange = function (){
         this.nextElementSibling.innerHTML = this.value;
         SetColrForBody();
    };    
}
function SetColrForBody(){
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);
    if(!isNaN(r) && !isNaN(g) && !isNaN(b)){
        document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }
}


