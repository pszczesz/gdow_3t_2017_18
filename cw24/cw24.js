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
            document.getElementById("wynik").innerHTML 
                      = GetResult(textInputs,radioInputs);
        }else{
            console.log("ERROR");
        }
        console.log(textInputs);
        console.log(radioInputs);
    };
};
function GetValues(textInputs){
    var oceny = [];
 //   textInputs.forEach(function(item){oceny.push(parseInt(item.value))});
    for(var i=0;i<textInputs.length;i++){
        oceny.push(parseInt(textInputs[i].value));
    }
    return oceny;
}
function GetResult(textInputs,radioInputs){
    var oceny = GetValues(textInputs);
    var wybor = "";
    var result = "";
    for(var i=0;i<radioInputs.length;i++){
        if(radioInputs[i].checked){
            wybor = radioInputs[i].value;
            break;
        }
    }
    switch (wybor) {
        case "max":
            var max = Math.max.apply(null,oceny);
            //var max = Math.max(...oceny);
           result = "Maksymalna ocena to: "+max;
            break;         
        case "min":
           var min = Math.min.apply(null,oceny);
            result = "Minimalna ocena to: "+min;
            break;         
        case "avg":
            var suma = 0;
            oceny.forEach(function(item){
                suma += item;
            });
            result = "Wartość średnia: "+suma/oceny.length;
            break;            
        default:
            result = "coś nie tak!!!!";
            break;
    }
    return result;
}
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


