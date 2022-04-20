// const onClick = () => {
//     console.log(this.id, this.innerHTML);
//     document.getElementById('display').innerHTML = "test";
//  }

const allButtons = document.querySelectorAll(".button");
console.log(allButtons);
const SimpleOperators = document.querySelectorAll(".button--orange");
console.log(SimpleOperators);
const OtherOperators = document.querySelectorAll(".button--white");
console.log(OtherOperators);
const zero = document.querySelector(".button--oval");
console.log(zero);
const decimalPoint = document.querySelector(".button--decimal");
console.log(decimalPoint);
const numbers = document.querySelectorAll(".button--number");
console.log(numbers);

const stringDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//console.log(stringDigits)
const numberDigits = stringDigits.map((str) => parseInt(str));
//console.log(numberDigits)
const getElementById = numberDigits.map((num) => document.getElementById(num));
//console.log(getElementById)

let displayInput = "";

const element = getElementById.forEach((digit) => {
  digit.onclick = function (_event) {
    //console.log(element);
    //console.log(this.id, this.innerHTML);
    //document.getElementById("input").innerHTML = this.innerHTML ;

    displayInput = displayInput + this.innerHTML;
    document.getElementById("input").innerHTML = displayInput;
    console.log(displayInput);
  };
});

// //const element = document.getElementById("1");
// element.onclick = function(_event) {
//   console.log(element);
//   console.log(this.id, this.innerHTML);
//   document.getElementById("input").innerHTML = this.innerHTML ;
// }

// document.getElementById(id).onclick = function(){code}
