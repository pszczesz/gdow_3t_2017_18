window.onload = start;

function start(){
    document.querySelector("#licz").onclick = function (){
      var pocz = new Date(document.querySelector("#pocz").value);  
      var kon = new Date(document.querySelector("#kon").value);
      alert(Math.ceil(Math.abs(pocz.getTime() - kon.getTime())/(3600*1000*24)));
    };
    document.getElementById("tel").onkeydown = function (event){
        console.log(event.key);
        if(event.key>='0' && event.key<='9'){
            return true;
        }else{
            return false;
        }
    };
    document.querySelector("#ustaw").addEventListener("click",function () {
        document.querySelector("#setColor").style.backgroundColor = 
                document.querySelector("#color").value;
    });
}