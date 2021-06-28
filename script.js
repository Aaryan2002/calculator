var number = '';
var calculation = '';
function updateScreen(){
    var screen = document.getElementById("screenPara");
    screen.innerHTML = number;
}

var zeroButton = document.getElementById("zero");
zeroButton.addEventListener("click", function() {
    number+='0';
    updateScreen();
});

var oneButton = document.getElementById("one");
oneButton.addEventListener("click", function() {
    number+='1';
    updateScreen();
});

var twoButton = document.getElementById("two");
twoButton.addEventListener("click", function() {
    number+='2';
    updateScreen();
});

var threeButton = document.getElementById("three");
threeButton.addEventListener("click", function() {
    number+='3';
    updateScreen();
});

var fourButton = document.getElementById("four");
fourButton.addEventListener("click", function() {
    number+='4';
    updateScreen();
});


var fiveButton = document.getElementById("five");
fiveButton.addEventListener("click", function() {
    number+='5';
    updateScreen();
});


var sixButton = document.getElementById("six");
sixButton.addEventListener("click", function() {
    number+='6';
    updateScreen();
});


var sevenButton = document.getElementById("seven");
sevenButton.addEventListener("click", function() {
    number+='7';
    updateScreen();
});


var eightButton = document.getElementById("eight");
eightButton.addEventListener("click", function() {
    number+='8';
    updateScreen();
});

var nineButton = document.getElementById("nine");
nineButton.addEventListener("click", function() {
    number+='9';
    updateScreen();
});

var decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", function() {
    if (!number.includes('.'))
    number+='.';
    updateScreen();
});

var divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function() {
    if(number !== ''){
    calculation = number + ' / ';
    }
    number = '';
    updateScreen();
});

var multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", function() {
    if(number !== ''){
    calculation = number + ' * ';
    }
    number = '';
    updateScreen();
});

var minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function() {
    if(number !== ''){
    calculation = number + ' - ';
    }
    number = '';
    updateScreen();
});

var plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function() {
    if(number !== ''){
    calculation = number + ' + ';
    }
    number = '';
    updateScreen();
});

var equalButton = document.getElementById("equal");
equalButton.addEventListener("click", function() {
    if(calculation !== '' && number !== ''){
    number = eval(calculation + number);
    }
    calculation = '';
    updateScreen();
});


var acButton = document.getElementById("ac");
acButton.addEventListener("click", function() {
    number = '';
    calculation = '';
    updateScreen();
});


var percentageButton = document.getElementById("percentage");
percentageButton.addEventListener("click", function() {
    if (number != ''){
        number = eval (number + " / 100");
    }
    updateScreen();
});

var plusMinusButton = document.getElementById("plus_minus");
plusMinusButton.addEventListener("click", function() {
    if (number != ''){
        number = eval ("- " + number);
    }
    updateScreen();
});