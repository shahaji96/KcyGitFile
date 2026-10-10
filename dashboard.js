//Real time example on switch

//ATM Menu

let button = 3;
switch (button) {
    case 1:
        console.log("Check Balance");
        break;
    case 2:
        console.log("Withdraw Money");
        break;
    case 3:
        console.log("Available Balance");
        break;
    case 4:
        console.log("Deposit Money");
        break;
    default:
        console.log("Invalid option");
}

console.log("-----Langauge Selection-----")

//Langauge Selection

let langauge = "English";

switch (langauge) {
    case "Marathi":
        console.log("Person is from Maharashtra");
        break;
    case "Hindi":
        console.log("Person is from UP");
        break;
    case "Gujarati":
        console.log("Person is from gujrat");
        break;
    default:
        console.log("Person is from pakistan");
}

console.log("---Signal-----")

//Signal

let light = "df";
switch (light) {
    case "Red":
        console.log("STOP");
        break;
    case "Yellow":
        console.log("SLOW DOWN");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}

console.log("---Hotel Menu-----")

//Hotel Menu

let Menu = 8;
switch (Menu) {
    case 1:
        console.log("Chikan Biryani");
        break;
    case 2:
        console.log("Mutton Handi");
        break;
    case 3:
        console.log("Mutton BIryani");
        break;
    case 4:
        console.log("BUrger");
        break;
    default:
        console.log("Menu not available");
}


console.log("---Calculater----");

let a=20;
let b=10;
let Arithmatic="+";
switch(Arithmatic){
    case "+":
        console.log("Result Addition:"+ (a+b));
        break;
    case "-":
        console.log("Result subtraction:"+ (a-b));
        break;
    case "*":
        console.log("Result multiplication:"+(a*b));
        break;
    default:
        console.log("Invalid operation")
}
