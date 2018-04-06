window.onload = function (){
   document.getElementById("dodaj").onclick = function (){
       var imieElem = document.getElementById("imie");
       var nazwiskoElem = document.getElementById("nazwisko");
       var wiekElem = document.getElementById("wiek");
       var szkolaElem = document.getElementById("szkola");
       var imOK = ValidateText(imieElem);
       var nazOK = ValidateText(nazwiskoElem);
       var szkOK = ValidateText(szkolaElem);
       var wiekOK = ValidateWiek(wiekElem);
       if(imOK && nazOK && szkOK && wiekOK){
           console.log("OK");
           var tab = document.getElementById("t1");
           var row = tab.insertRow(-1);
           var c1 = row.insertCell(0);
           c1.innerHTML = imieElem.value;
           var c2 = row.insertCell(1);
           c2.innerHTML = nazwiskoElem.value;
           var c3 = row.insertCell(2);
           c3.innerHTML = wiekElem.value;
           var c4 = row.insertCell(3);
           c4.innerHTML = szkolaElem.value;           
       }
       console.log(document.getElementById("t1").rows.length);
   };
    function ValidateWiek(elem){
        var value = parseInt(elem.value);
        if(!isNaN(value) && value>0 && value<69){
            elem.style.border = "grey 1px solid";
            return true;
        }else{
            elem.style.border = "red 2px solid";
            return false;
        }
    }
    function ValidateText(elem){
        var value = elem.value;
        var path = /^[A-ZŁŃŹŻÓĄĘŚĆ]{1}[a-ząęźżćńłśó]{2,}$/;        
        if(path.test(value)){
            elem.style.border = "grey 1px solid";
            return true;
        }else{
            elem.style.border = "red 2px solid";
            return false;
        }
    }
};


