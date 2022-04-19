

// const onClick = () => {
//     console.log(this.id, this.innerHTML);
//     document.getElementById('display').innerHTML = "test";
//  }


const stringDigits = ["0" , "1" , "2" , "3", "4", "5", "6", "7", "8", "9"];
//console.log(stringDigits)
const numberDigits = stringDigits.map((str) => parseInt(str));
//console.log(numberDigits)
const getElementById = numberDigits.map((num) => document.getElementById(num));
//console.log(getElementById)

let displayInput = ''

    const element = getElementById.forEach((digit)=>{
    
        digit.onclick = function(_event) { 
            //console.log(element);
            //console.log(this.id, this.innerHTML);
            //document.getElementById("input").innerHTML = this.innerHTML ;
            
            displayInput = displayInput + (this.innerHTML);
            document.getElementById("input").innerHTML = displayInput ;
            console.log(displayInput);
        }
    });
 

// //const element = document.getElementById("1");
// element.onclick = function(_event) {
//   console.log(element);
//   console.log(this.id, this.innerHTML);
//   document.getElementById("input").innerHTML = this.innerHTML ;
// }

// document.getElementById(id).onclick = function(){code}

