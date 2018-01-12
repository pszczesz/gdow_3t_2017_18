window.onload = start;

function start(){
    document.getElementById("tel").onkeydown = function (event){
        console.log(event.key);
        if(event.key>='0' && event.key<='9'){
            return true;
        }else{
            return false;
        }
    };
}