

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
let exceedsAllowedInputLength = false
let numberDisplaystring = ''
let position = 0
let calculatedValue = ''


for (let i = 0; i < allButtons.length; i++) {
  const clickedButton = allButtons[i];

  clickedButton.onclick = function (_event) {
    clickedButtonValue = this.innerHTML;
    switch (clickedButtonValue) { 
    // ----------CANCEL------------------------
      case "C":  
        isDecimal = false;
        isEqual = false;
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
        if (numberDisplay === '' || numberDisplay === 0 || numberDisplay === "0" ) {
        }else if (isNegative === false) {
                  numberDisplay = '-' + numberDisplay;
                  isNegative = true;
                } else {
                  numberDisplay = numberDisplay.slice(1);
                  isNegative = false;
                }
        break;
    // ----------PERCENTAGE---------------------
      case "%": 
        if (numberDisplay === '' || numberDisplay === 0 || numberDisplay === "0" ) { 
        }else {
                operator = this.innerHTML;
                value1 = parseFloat(numberDisplay);
                calculationDisplay = numberDisplay + operator;
                numberDisplay = "";
              }
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
        isEqual = true
        if (operator !== '') {
        value2 = parseFloat(numberDisplay);
        calculateFunction (value1, value2, operator);
        }
        else {
          calculationDisplay = numberDisplay + '='
        }   
        break;
    //------------ DECIMAL POINT ----------------- '  .  '
      case ".": 
        if (isDecimal === false) {
          if(numberDisplay === ''){numberDisplay = 0} // prefix 0 if there is no number before the decimal point
          numberDisplay +=  this.innerHTML;
          isDecimal = true;
        }   
        break;

    //------------- NUMBERS ---------------------' 0 - 9 '

      default:
        numberDisplaystring = numberDisplay.toString();
        limitInputLength(numberDisplaystring)
        if (exceedsAllowedInputLength === false) {
            if (isEqual === true || numberDisplay === '0') {  
            numberDisplay = this.innerHTML;
            isEqual = false;    
          }
          else {
            numberDisplay += this.innerHTML;
          }
          numberDisplaystring = numberDisplay;
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
        exceedsAllowedInputLength = false
        if (numberDisplaystring.length > 10) { 
          return exceedsAllowedInputLength = true; 
        }
      }

      //---------------------------------------------- 
      //   function : round off : length 10 
      //---------------------------------------------- 

      const rounOffFunction = (calculatedValueRecieved) => {
        calculatedValue = calculatedValueRecieved.toString();
        lengthOfCalculatedValue = calculatedValue.length;
        position = calculatedValue.split(".")[0].length;
        if (lengthOfCalculatedValue > 10 ) {
          if (position <= 10) {
            let wholePart = calculatedValue.slice(0, position).length;
            let fractionalPart = calculatedValue.slice(position+1).length;
              fractionalPartLength = 10 - 1 - wholePart ;
              calculatedValue = parseFloat(calculatedValue).toFixed(fractionalPartLength);    
              return calculatedValue; 
          } else {
            return calculatedValue = '      ...';   // => the output is too big to display)
          }
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
        numberDisplay = calculatedValue;
        operator = '';
        value1 = 0;
        value2 = 0;
      }

}


