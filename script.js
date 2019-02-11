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

var btn0 = document.querySelector(".zero");
var btn1 = document.querySelector(".one");
var btn2 = document.querySelector(".two");
var btn3 = document.querySelector(".three");
var btn4 = document.querySelector(".four");
var btn5 = document.querySelector(".five");
var btn6 = document.querySelector(".six");
var btn7 = document.querySelector(".seven");
var btn8 = document.querySelector(".eight");
var btn9 = document.querySelector(".nine");
var btnAdd = document.querySelector(".add");
var btnSubstract = document.querySelector(".substract");
var btnMultiply = document.querySelector(".multiply");
var btnDivide = document.querySelector(".divide");
var btnEquals = document.querySelector(".equals");
var btnClear = document.querySelector(".clear");
var btnDot = document.querySelector(".dot");
var btnBackspace = document.querySelector(".backspace");

let displayValue = '';

let display = document.querySelector('#display');

function clickButton(thing)
{
    switch(thing)
    {
        case '÷':
            btnDivide.classList.add('clickedOperator');
            setTimeout(function(){btnDivide.classList.remove('clickedOperator');}, 200);
            return;
        case '+':
            btnAdd.classList.add('clickedOperator');
            setTimeout(function(){btnAdd.classList.remove('clickedOperator');}, 200);
            return;
        case '-':
            btnSubstract.classList.add('clickedOperator');
            setTimeout(function(){btnSubstract.classList.remove('clickedOperator');}, 200);
            return;
        case 'x':
            btnMultiply.classList.add('clickedOperator');
            setTimeout(function(){btnMultiply.classList.remove('clickedOperator');}, 200);
            return;
        case '.':
            btnDot.classList.add('clickedDot');
            setTimeout(function(){btnDot.classList.remove('clickedDot');}, 200);
            return;
        case '=':
            btnEquals.classList.add('clickedEquals');
            setTimeout(function(){btnEquals.classList.remove('clickedEquals');}, 200);
            return;
        case 'bckspc':
            btnBackspace.classList.add('clickedBackspace');
            setTimeout(function(){btnBackspace.classList.remove('clickedBackspace');}, 200);
            return;
        case 'clr':
            btnClear.classList.add('clickedClear');
            setTimeout(function(){btnClear.classList.remove('clickedClear');}, 200);
            return;
    }
    window[`btn${thing}`].classList.add('clicked');
    setTimeout(function(){window[`btn${thing}`].classList.remove('clicked');}, 200);
}

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
    clickButton(thing);
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
        else if(thing=='-' && isThereSymbol(displayValue)[1] == 'x' && displayValue.slice(-1)!=='-')
        {
            write(thing);
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
     if (event.keyCode == 104) {
        btn8.click();
     }
     if (event.keyCode == 57 || event.keyCode == 105) {
        btn9.click();
     }
     if (event.keyCode == 8) {
        btnBackspace.click();
        clickButton('bckspc');
     }
     if (event.keyCode == 27) {
        btnClear.click();
        clickButton('clr');
     }
     if (event.keyCode == 189  || event.keyCode == 109) {
        btnSubstract.click();
     }
     if (event.keyCode == 13) {
        btnEquals.click();
        clickButton('=');
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
     if (event.keyCode == 56) {
        btn8.click();
     }
     if (event.keyCode == 42) {
        btnMultiply.click();
     }
     if (event.keyCode == 61) {
        btnEquals.click();
        clickButton('=');
     }
}