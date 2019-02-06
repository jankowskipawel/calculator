function operate(a,b,operator)
{
    switch(operator)
    {
        case "+":
            return a+b;

        case "-":
            return a-b;

        case "x":
            return a*b;

        case "÷":
            return a/b;
    }
}



let btn0 = document.querySelector(".zero");
let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");
let btn3 = document.querySelector(".three");
let btn4 = document.querySelector(".four");
let btn5 = document.querySelector(".five");
let btn6 = document.querySelector(".six");
let btn7 = document.querySelector(".seven");
let btn8 = document.querySelector(".eight");
let btn9 = document.querySelector(".nine");
let btnAdd = document.querySelector(".add");
let btnSubstract = document.querySelector(".substract");
let btnMultiply = document.querySelector(".multiply");
let btnDivide = document.querySelector(".divide");
let btnEquals = document.querySelector(".equals");
let btnClear = document.querySelector(".clear");
let btnDot = document.querySelector(".dot");
let btnBackspace = document.querySelector(".backspace");

let displayValue = '';

let display = document.querySelector('#display');

function roundNumber(rnum, rlength) 
{ // Arguments: number to round, number of decimal places
    return Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
}

function write(thing)
{
    if(display.textContent.length < 27) // dont let to overflow display
    {
        display.textContent += thing;
    }
}

function isThereSymbol (str)
{
    for(let i=0; i<str.length; i++)
    {
        if('+' === str[i] ||'-' === str[i] ||'x' === str[i] ||'÷' === str[i])
        {
            if(i==0) // if number is negative
            {
                continue;
            }
            return [1, str[i], i];
        }
    }
    return [0];
}

function writeOperator(thing)
{
    displayValue = display.textContent;
    if(isThereSymbol(displayValue)[0] === 1)
    {
        let firstNumber = parseFloat(displayValue.slice(0,isThereSymbol(displayValue)[2]));
        let secondNumber = parseFloat(displayValue.slice(isThereSymbol(displayValue)[2]+1));
        if(!isNaN(secondNumber))
        {
        let result = operate(firstNumber, secondNumber, isThereSymbol(displayValue)[1]);
        display.textContent = roundNumber(result, 10);
        }
    }
    else
    {
        if(thing === '=' || (displayValue.length == 0 && thing!= '-') || (displayValue.indexOf('-')==0 && displayValue.length == 1))
        {
            return;
        }
        write(thing);
    }
}

function dot()
{
    displayValue = display.textContent;
    let beforeSymbol= displayValue.slice(0,isThereSymbol(displayValue)[2]);
    let afterSymbol = displayValue.slice(isThereSymbol(displayValue)[2]+1);
    if(!(beforeSymbol.indexOf(".")>=0) || !(afterSymbol.indexOf(".")>=0))
    {
        write('.');
    }
}

btn0.addEventListener('click', function (){write("0")});
btn1.addEventListener('click', function (){write("1")});
btn2.addEventListener('click', function (){write("2")});
btn3.addEventListener('click', function (){write("3")});
btn4.addEventListener('click', function (){write("4")});
btn5.addEventListener('click', function (){write("5")});
btn6.addEventListener('click', function (){write("6")});
btn7.addEventListener('click', function (){write("7")});
btn8.addEventListener('click', function (){write("8")});
btn9.addEventListener('click', function (){write("9")});
btnAdd.addEventListener('click', function (){writeOperator("+")});
btnSubstract.addEventListener('click', function (){writeOperator("-")});
btnDivide.addEventListener('click', function (){writeOperator("÷")});
btnMultiply.addEventListener('click', function (){writeOperator("x")});
btnEquals.addEventListener('click', function (){writeOperator('=')});
btnClear.addEventListener('click', function(){display.textContent = ''});
btnDot.addEventListener('click', function(){dot()});
btnBackspace.addEventListener('click', function(){display.textContent = display.textContent.slice(0, -1);});

window.onkeydown = function(event) {
    if (event.keyCode == 48 || event.keyCode == 96) {
        btn0.click();
     }
     if (event.keyCode == 49 || event.keyCode == 97) {
        btn1.click();
     }
     if (event.keyCode == 50 || event.keyCode == 98) {
        btn2.click();
     }
     if (event.keyCode == 51 || event.keyCode == 99) {
        btn3.click();
     }
     if (event.keyCode == 52 || event.keyCode == 100) {
        btn4.click();
     }
     if (event.keyCode == 53 || event.keyCode == 101) {
        btn5.click();
     }
     if (event.keyCode == 54 || event.keyCode == 102) {
        btn6.click();
     }
     if (event.keyCode == 55 || event.keyCode == 103) {
        btn7.click();
     }
     if (event.keyCode == 56 || event.keyCode == 104) {
        btn8.click();
     }
     if (event.keyCode == 57 || event.keyCode == 105) {
        btn9.click();
     }
     if (event.keyCode == 8) {
        btnBackspace.click();
     }
     if (event.keyCode == 27) {
        btnClear.click();
     }
     if (event.keyCode == 189  || event.keyCode == 109) {
        btnSubstract.click();
     }
     if (event.keyCode == 187 || event.keyCode == 13) {
        btnEquals.click();
     }
     if (event.keyCode == 190 || event.keyCode == 110) {
        btnDot.click();
     }
     if (event.keyCode == 191 || event.keyCode == 111) {
        btnDivide.click();
     }
     if (event.keyCode == 88  || event.keyCode == 106) {
        btnMultiply.click();
     }
 }

 window.onkeypress = function(event) {
    if (event.keyCode == 43  || event.keyCode == 107) {
        btnAdd.click();
     }
     if (event.keyCode == 42) {
        btnMultiply.click();
     }
}