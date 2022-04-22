

const allButtons = document.querySelectorAll(".button");
let numberDisplay = "";
let calculationDisplay = "";
let clickedButtonValue = "";
let isDecimal = false;
let isNegative = false;
let isEqual = false;
//console.log(allButtons);
let value1 = 0;
let value2 = 0;
let operator = '';
let intNumberDisplay = 0;
let temp = '0'


for (let i = 0; i < allButtons.length; i++) {
  const clickedButton = allButtons[i];

  clickedButton.onclick = function (_event) {
    clickedButtonValue = this.innerHTML;
  

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
        operator = this.innerHTML;
        value1 = parseFloat(numberDisplay);
        calculationDisplay = numberDisplay + operator;
        numberDisplay = "";
        break;
    //------------ EQUAL TO --------------------- '  =  '
      case "=":
        console.log("It is a =");
        if (value1 != 0) {
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
        console.log("It is a ."); //initialise flag, set flag, if flag on : ignore
        if (isDecimal === false) {
          if(numberDisplay === ''){numberDisplay = 0} // prefix 0 if there is no number before the decimal point
          numberDisplay +=  this.innerHTML;
            isDecimal = true;
        }   
        break;

    //------------- NUMBERS ' 0 - 9 ' --------------- 

      default:
          if (isEqual && value1 != 0) {
            numberDisplay = this.innerHTML;
            isEqual = ''
          }
          else {
            numberDisplay += this.innerHTML;
          }
          console.log(numberDisplay)
          temp = parseFloat(numberDisplay)
          console.log(temp)
          numberDisplay = temp
          //numberDisplay = parseInt(numberDisplay);
          //console.log(numberDisplay)

        break;
    }



// fix a length for display
// When entering value, call the function to check if the limit is reached , is yes stop recieving input
// when rounding off , look for the length and round off the digits to allow max decimal to fit the allowed length




    document.getElementById("numbers").innerHTML = numberDisplay;
    document.getElementById("calculation").innerHTML = calculationDisplay;

  };
      //------------------------------- 
      //   function to calculate 
      //------------------------------- 

      const calculateFunction = (value1, value2, operator) => {
        calculationDisplay = value1 + operator + value2 + '=';
        switch (operator) {
          case '+':
            numberDisplay = value1 + value2;
            // function to round off
            //Number((numberDisplay).toFixed(5))
            break;
          case '-':
            numberDisplay = value1 - value2;
            //Number((numberDisplay).toFixed(5))
            break;
          case 'x':
            numberDisplay = value1 * value2;
            numberDisplay = numberDisplay.toFixed(8)
            break;
          case '÷':
            numberDisplay = value1 / value2;
            math.round((numberDisplay),2)
            break;  
          case '%':
            calculationDisplay = value1 + operator + '=';
            numberDisplay = value1 /100;
            //Number((numberDisplay).toFixed(5))
            break;    
        }
        operator = ''
        value1 = 0
        value2 = 0
      }

}


