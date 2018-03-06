window.onload = function (){
    document.getElementById("oblicz").onclick = function (){
        //alert("fdfdff");
        var inputs = document.getElementsByTagName("input");
        console.log(inputs);
        var textInputs = [];
        var radioInputs = [];
        for(var i=0;i<inputs.length;i++){
            if(inputs[i].type==="text"){
                textInputs.push(inputs[i]);
            }
            if(inputs[i].type==="radio"){
                radioInputs.push(inputs[i]);
            }
        }
        if(Validate(textInputs)){
            console.log("OK");
        }else{
            console.log("ERROR");
        }
        console.log(textInputs);
        console.log(radioInputs);
    };
};
function Validate(dane){
    var isOK = true;
    for(var i=0;i<dane.length;i++){
        var ocena = parseInt(dane[i].value);
        if(!isNaN(ocena) && ocena>=1 && ocena<=6){
            dane[i].nextElementSibling.innerHTML = "";
        }else{
            dane[i].nextElementSibling.innerHTML = "błędne dane!!!";
            isOK = false;
        }
    }
    return isOK;
}
//window.onload = start
//function start() {.....}
// var start = function() {......}


