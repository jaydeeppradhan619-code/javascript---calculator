// calculator program


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
    
}

function backspace() {
        const display = document.getElementById('display');
        // slice(0, -1) extracts from index 0 up to (but not including) the last character
        display.value = display.value.slice(0,-1);
}