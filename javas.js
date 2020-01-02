var x =0;

function sabiranje(num1,num2) {
    return (num1+num2);
}

function oduzimanje(num1,num2){
    return(num1-num2);
}

function mnozenje(num1,num2){
    return num1*num2;
}

function deljenje(num1,num2){
    return num1/num2;
}

document.getElementById('dugme').onclick = function() {
    var e = document.getElementById("opcije");
    var izbor = e.options[e.selectedIndex].value;
    console.log(izbor);
    var num1 = Number(document.getElementById("prviBroj").value);
    var num2 = Number(document.getElementById("drugiBroj").value);
    if(izbor=="sabiranje"){
    x = sabiranje(num1,num2);
    }
    if(izbor=="oduzimanje"){
        x = oduzimanje(num1,num2);
        }
    if(izbor=="mnozenje"){
         x = mnozenje(num1,num2);
        }
    if(izbor=="deljenje"){
         x = deljenje(num1,num2);
        }
    document.getElementById("demo").innerHTML = x;
 }

