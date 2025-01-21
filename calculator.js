//This is a calculator app
let userChoice;
let num1;
let num2;
let valid;

function getInput() {
    console.log("What function do you want to perform?")
    console.log("Type 'exit' to quit")
    userChoice = Number(prompt(`1: Add, 2: Subtract, 3: Multiply 4: Divide, 5: Exponent: `))
    return userChoice;
}

function isValid(userChoice){
    let valid = false;

    if(userChoice >= 1 && userChoice <= 5){
        valid = true;
    }

    if(userChoice === 'exit'){
        valid = true
    }
     if(!valid) {
        console.log("Invalid selection")
        console.log("Please try again")
        getInput()
    } 

    return valid

}

function getNums(){
    num1 = Number(prompt("What is your first number?: "))
    while(num1 === isNaN){
        num1 = prompt("What is your first number?: ")
    }

   
    num2 = Number(prompt("What is your second number?: "))
    while(num2 === isNaN){
        num2 = prompt("What is your first number?: ")
    }
    console.log(`num1 is ${num1} and num2 is ${num2}`)
    return num1, num2
}

function math(userChoice, num1, num2){
    /* if(!valid){
        console.log('Invalid user choice')
        return
    } */
    if(userChoice === 1) {
        let sum = num1 + num2;
        console.log(`The sum of ${num1} and ${num2} is ${sum}`);
        return sum
    }

    if(userChoice === 2) {
        let diff = num1 - num2;
        console.log(`The difference of ${num1} and ${num2} is ${diff}`)
        return diff
    }

    if(userChoice === 3) {
        let product = num1 * num2;
        console.log(`The product of ${num1} and ${num2} is ${product}`)
        return product
    }

    if(userChoice === 4) {
        let quotient = num1 / num2;
        console.log(`The quotient of ${num1} and ${num2} is ${quotient}`)
        return quotient
    }

    if(userChoice === 5) {
        let power = num1 ** num2;
        console.log(`The power of ${num1} and ${num2} is ${power}`)
        return power
    }
}



function main(){
    getInput()
    isValid(userChoice)
    getNums()
    math(userChoice, num1, num2)
}

main()