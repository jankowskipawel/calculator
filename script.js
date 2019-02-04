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

let displayValue = '';

let display = document.querySelector('#display');

function write(thing)
{
    display.textContent += thing;
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
        display.textContent = result;
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

// TODO round big(small) numbers
// TODO keyboard support
// TODO better look
// TODO screen overflow