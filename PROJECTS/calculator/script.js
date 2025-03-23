let display = document.getElementById("display");

function showVal(input){
    display.value += input;
}

function allClear(){
    display.value = "";
}

function showResult (){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}