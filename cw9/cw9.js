window.onload = start;

function start(){
    document.getElementById("zegar").innerHTML = "Zegar: "+UpdateTime();
}
function UpdateTime(){
    var dateTime = new Date();
    //console.log(dateTime.toTimeString().split(' ')[0]);
    return dateTime.toTimeString().split(' ')[0];
}
setInterval(function(){
    document.getElementById("zegar").innerHTML = "Zegar: "+UpdateTime();
},1000);
