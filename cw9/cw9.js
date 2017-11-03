window.onload = start;

function start(){
   // document.getElementById("zegar").innerHTML = UpdateTime();
}
function UpdateTime(){
    var dateTime = new Date();
    console.log(dateTime.toTimeString());
}
setInterval(UpdateTime,1000);
