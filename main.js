

const allButtons = document.querySelectorAll(".button");
let numberDisplay = "";
let calculationDisplay = "";
let clickedButtonValue = "";
let isDecimal = false;
let isNegative = false;
//console.log(allButtons);
let value1 = 0;
let value2 = 0;
let operator = '';
let intNumberDisplay = 0;






for (let i = 0; i < allButtons.length; i++) {
  const clickedButton = allButtons[i];

  clickedButton.onclick = function (_event) {
    clickedButtonValue = this.innerHTML;
    //console.log(clickedButtonValue);

    switch (clickedButtonValue) { 
    // ----------CANCEL------------------------
      case "C":  
        //console.log("It is a c");
        isDecimal = false;
        isNegative = false;
        numberDisplay = "0";
        calculationDisplay = "";
        value1 = 0;
        value2 = 0;
        operator = '';          // clear all: ip, op, flags   
        break;
    // ----------POSITIVE NEGATIVE------------- ' +/- '
      case "+/-": 
        //console.log("It is a +-");         // initialise flag &  // toggle flag
        if (isNegative === false) {
          numberDisplay = '-' + numberDisplay;
          isNegative = true;
        } else {
          numberDisplay = numberDisplay.slice(1);
          isNegative = false;
        }
        break;
    // ----------PERCENTAGE---------------------
      case "%": // TO DO
        console.log("It is a %");
        break;
    //------------ ARITHMETIC OPERATIONS ------- ' + ' , ' - ' ,  ' * ' , ' / ' 
      case "+":
      case "-":
      case "x":
      case "÷":
        operator = this.innerHTML;
        value1 = parseInt(numberDisplay);
        calculationDisplay = numberDisplay + operator;
        numberDisplay = "";
        break;
    //------------ EQUAL TO --------------------- '  =  '
      case "=":
        console.log("It is a =");
        //move innerhtml into a variable, convert it to a number & call function to calculate
          if (value1 != 0) {
          value2 = parseInt(numberDisplay);
          calculateFunction (value1, value2, operator);
          operator = '';
        }
        else {
          calculationDisplay = numberDisplay + '='
          operator = '='
         
          //numberDisplay = 0

        }
                    
        break;
    //------------ DECIMAL POINT ------------------- '  .  '
      case ".": 
        console.log("It is a ."); //initialise flag, set flag, if flag on : ignore
        if (isDecimal === false) {
          if(numberDisplay === ''){numberDisplay = 0} // prefix 0 if there is no number before the decimal point
          numberDisplay +=  this.innerHTML;
            isDecimal = true;
        }   
        break;

    //------------- NUMBERS ' 0 - 9 ' --------------- 

      default:

          numberDisplay += this.innerHTML;
          numberDisplay = parseInt(numberDisplay);

        break;
    }







    document.getElementById("numbers").innerHTML = numberDisplay;
    document.getElementById("calculation").innerHTML = calculationDisplay;

  };
      //------------------------------- 
      //   function to calculate 
      //------------------------------- 

      const calculateFunction = (value1, value2, operator) => {
        calculationDisplay = value1 + operator + value2;
        switch (operator) {
          case '+':
            numberDisplay = value1 + value2;
            break;
          case '-':
            numberDisplay = value1 - value2;
            break;
          case 'x':
            numberDisplay = value1 * value2;
            break;
          case '÷':
            numberDisplay = value1 / value2;
            break;    
        }
        operator = ''
      }

}


