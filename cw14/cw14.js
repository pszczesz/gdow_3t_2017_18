window.onload = start;
function start(){
    var color = document.getElementsByName("kolor");
     for(var i=0; i<color.length;i++){
        color[i].onclick = zmiana;
    }
}
function zmiana(){
    document.body.style.backgroundColor = this.value;
}
function setColor(){
   // var color = document.getElementsByName("kolor");
    document.body.style.backgroundColor = this.value;
    console.log(this);
//    for(var i=0; i<color.length;i++){
//        if(color[i].checked){
//            document.body.style.backgroundColor = color[i].value;
//            break;
//        }
//    }
}


