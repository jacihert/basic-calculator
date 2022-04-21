const allButtons = document.querySelectorAll(".button");
let displayInput = "";
let clickedButtonValue = "";
let isDecimal = false;
let isNegative = false;
console.log(allButtons);





for (let i = 0; i < allButtons.length; i++) {
  const clickedButton = allButtons[i];
  clickedButton.onclick = function (_event) {
    //console.log(clickedButton);
    //displayInput = displayInput + this.innerHTML;
    //console.log(this.innerHTML);
    clickedButtonValue = this.innerHTML;
    console.log(clickedButtonValue);

    //maximum length of the input number value = 10


    switch (clickedButtonValue) { 

      // Other Operators or special operators ' C ' , ' +/- ' ,  ' % '
      case "C":  // COMPLETED
        console.log("It is a c");
        isDecimal = false;
        isNegative = false;
        displayInput = "";
         // clear all: ip, op, flags   
         //?? clickedButtonValue = "";
        displayInput = displayInput;
        break;

      case "+/-": // COMPLETED
        console.log("It is a +-");         // initialise flag &  // toggle flag
        if (isNegative === false) {
          displayInput = '-' + displayInput;
          isNegative = true;
        } else {
          displayInput = displayInput.slice(1);
          isNegative = false;
        }
        break;

      case "%": // TO DO
        console.log("It is a %");
        displayInput +=  this.innerHTML;
        break;

        // simple number operators  ' + ' , ' - ' ,  ' * ' , ' / ' , '  =  '

        //let lastkey = displayInput.slice(-1) : function  when operator is pressed was the previous key an operator as well ? replace it then
        // new numeric variable to hold the numbers keyed in before the operator button is pressed
        // function to calculate the (reduce) calculation expression
        // = symbol rules
        //output display rules & variable updates acc to each function

      case "+":
        console.log("It is a +");
        displayInput = displayInput + this.innerHTML;
        break;

      case "-":
        console.log("It is a -");
        displayInput = displayInput + this.innerHTML;
        break;

      case "x":
        console.log("It is a x");
        displayInput = displayInput + this.innerHTML;
        break;

      case "÷":
        console.log("It is a ÷");
        displayInput = displayInput + this.innerHTML;
        break;

      case "=":
        console.log("It is a =");
        displayOutput = displayInput;
        break;

      case ".": // COMPLETED
        console.log("It is a ."); //initialise flag, set flag, if flag on : ignore
        if (isDecimal === false) {
          if(displayInput === ''){displayInput = 0} // prefix 0 if there is no number before the decimal point
            displayInput = displayInput + this.innerHTML;
            isDecimal = true;
        }   
        break;

         // NUMBERS ' 0 - 9 '

      default:
        console.log("It is a number");
        //console.log(`check1 ${displayInput}`);
        if (this.innerHTML === '0' && displayInput === '') {
          displayInput = displayInput 
         // console.log(`check2 ${displayInput}`);
        } 
        else { displayInput = displayInput + this.innerHTML
         // console.log(`check3 ${displayInput}`);
        };
         // console.log(`check4 ${displayInput}`);
        break;
    }

    document.getElementById("input").innerHTML = displayInput;
    document.getElementById("output").innerHTML = displayOutput;
    console.log(displayInput);
  };
}
