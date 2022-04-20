

// const onClick = () => {
//     console.log(this.id, this.innerHTML);
//     document.getElementById('display').innerHTML = "test";
//  }

const allButtons = document.querySelectorAll(".button");
console.log(allButtons);
const simpleOperators = document.querySelectorAll(".button--orange");
console.log(simpleOperators);
const otherOperators = document.querySelectorAll(".button--white");
console.log(otherOperators);
const zero = document.querySelector(".button--oval");
console.log(zero);
const decimalPoint = document.querySelector(".button--decimal");
console.log(decimalPoint);
const numbers = document.querySelectorAll(".button--number");
console.log(numbers);

let displayInput = ''
   
zero.onclick = function(_event) { 
    console.log(zero);         
    displayInput = displayInput + (this.innerHTML);
    document.getElementById("input").innerHTML = displayInput ;
    console.log(displayInput);
}
   
 

decimalPoint.onclick = function(_event) { 
    console.log(decimalPoint);   
    displayInput = displayInput + (this.innerHTML);
    document.getElementById("input").innerHTML = displayInput ;
    console.log(displayInput);
}

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    number.onclick = function(_event) { 
        console.log(number);   
        displayInput = displayInput + (this.innerHTML);
        document.getElementById("input").innerHTML = displayInput ;
        console.log(displayInput);
    }
    
}

for (let i = 0; i < simpleOperators.length; i++) {
    const operator = simpleOperators[i];
    operator.onclick = function(_event) { 
        console.log(operator);   
        displayInput = displayInput + (this.innerHTML);
        document.getElementById("input").innerHTML = displayInput ;
        console.log(displayInput);
    }
    
}
for (let i = 0; i < otherOperators.length; i++) {
    const specialOperator = otherOperators[i];
    specialOperator.onclick = function(_event) { 
        console.log(specialOperator);   
        displayInput = displayInput + (this.innerHTML);
        document.getElementById("input").innerHTML = displayInput ;
        console.log(displayInput);
    }
    
}
