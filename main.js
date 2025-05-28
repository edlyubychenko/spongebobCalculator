// Place to show calculations
const display = document.getElementById("display")
// function to show the display 
function showOnDisplay(input){
    display.value = input;
}


// function to clear display
 function clearDisplay() {
    display.value = "";
 }

//  function to calculate 
 function mathOperations() {
    display.value = eval(display.value);
 }