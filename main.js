

const allButtons = document.querySelectorAll(".button");
let numberDisplay = "";
let calculationDisplay = "";
let clickedButtonValue = "";
let isDecimal = false;
let isNegative = false;
let isEqual = false;
let value1 = 0;
let value2 = 0;
let operator = '';
let intNumberDisplay = 0;
let temp = '0'
let inputLength = 0
let exceedsAllowedInputLength = ''
let numberDisplaystring = ''
let position = 0
let calculatedValue = 0


for (let i = 0; i < allButtons.length; i++) {
  const clickedButton = allButtons[i];

  clickedButton.onclick = function (_event) {
    clickedButtonValue = this.innerHTML;
  

    switch (clickedButtonValue) { 
    // ----------CANCEL------------------------
      case "C":  

        isDecimal = false;
        isNegative = false;
        exceedsAllowedInputLength = false
        numberDisplay = "0";
        calculationDisplay = "";
        value1 = 0;
        value2 = 0;
        operator = '';   
        exceedsAllowedInputLength = ''       // clear all: ip, op, flags   
        break;
    // ----------POSITIVE NEGATIVE------------- ' +/- '
      case "+/-": 
        if (isNegative === false) {
          numberDisplay = '-' + numberDisplay;
          isNegative = true;
        } else {
          numberDisplay = numberDisplay.slice(1);
          isNegative = false;
        }
        break;
    // ----------PERCENTAGE---------------------
      case "%": 
        operator = this.innerHTML;
        value1 = parseInt(numberDisplay);
        calculationDisplay = numberDisplay + operator;
        numberDisplay = "";

        break;
    //------------ ARITHMETIC OPERATIONS ------- ' + ' , ' - ' ,  ' * ' , ' / ' 
      case "+":
      case "-":
      case "x":
      case "÷":
        isDecimal = false;
        operator = this.innerHTML;
        value1 = parseFloat(numberDisplay);
        calculationDisplay = numberDisplay + operator;
        numberDisplay = "";
        break;
    //------------ EQUAL TO --------------------- '  =  '
      case "=":
        if (value1 !== 0) {
        value2 = parseFloat(numberDisplay);
        calculateFunction (value1, value2, operator);
        isEqual = false;
        }
        else {
          calculationDisplay = numberDisplay + '='
          isEqual = true
        }   

        break;
    //------------ DECIMAL POINT ------------------- '  .  '
      case ".": 
        if (isDecimal === false) {
          if(numberDisplay === ''){numberDisplay = 0} // prefix 0 if there is no number before the decimal point
          numberDisplay +=  this.innerHTML;
            isDecimal = true;
        }   
        break;

    //------------- NUMBERS ' 0 - 9 ' --------------- 

      default:
        numberDisplaystring = numberDisplay.toString();
        limitInputLength(numberDisplaystring)
        if (exceedsAllowedInputLength === 'no') {
          if (isEqual === 'true' && value1 !== 0) { 
            numberDisplay = this.innerHTML;
            isEqual = 'false';
          }
          else {
            numberDisplay += this.innerHTML;
          }
          numberDisplaystring = numberDisplay;
          temp = parseFloat(numberDisplay)
          numberDisplay = temp
        }      
        break;
    }







    document.getElementById("numbers").innerHTML = numberDisplay;
    document.getElementById("calculation").innerHTML = calculationDisplay;

  };

      //---------------------------------------------- 
      //   function : limit input length : 10 
      //---------------------------------------------- 

      const limitInputLength = (numberDisplaystring) => {
        inputLength = 0;
        exceedsAllowedInputLength = ''
        inputLength = numberDisplaystring.length;
        if (inputLength > 10) { 
          exceedsAllowedInputLength = 'yes';
          return exceedsAllowedInputLength; 
        }
        else{
          exceedsAllowedInputLength='no';
        }
      }

      //---------------------------------------------- 
      //   function : round off : length 10 
      //---------------------------------------------- 

      const rounOffFunction = (calculatedValueRecieved) => {
        calculatedValue = calculatedValueRecieved.toString()
        lengthOfCalculatedValue = calculatedValue.length;
        position = calculatedValue.split(".")[0].length;
        if (position !== -1 ) {
          let wholePart = calculatedValue.slice(0, position).length
          let fractionalPart = calculatedValue.slice(position+1).length;
          let finalResult1 = parseFloat(calculatedValue).toFixed(2);
          if (lengthOfCalculatedValue > 10 ) {
            let x = 10 - lengthOfCalculatedValue - wholePart;
            let finalResult2 = parseFloat(calculatedValue).toFixed(x);    
          }
          return;      
         }
      }

      //------------------------------- 
      //   function : calculate 
      //------------------------------- 

      const calculateFunction = (value1, value2, operator) => {
        calculationDisplay = value1 + operator + value2 + '=';
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
          case '%':
            calculationDisplay = value1 + operator + '=';
            numberDisplay = value1 /100;
            break; 
        }
        rounOffFunction(numberDisplay); // function to round off
        operator = '';
        value1 = 0;
        value2 = 0;
      }

}


