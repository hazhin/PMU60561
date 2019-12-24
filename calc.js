var num1;
var num2;
var num3;
var func;
var result;
var memory="";
var str;

function addchislo(num3) {
	if (func == '=')
	{
	calculator.display.value = "";
	document.getElementById('out').innerHTML = "";
	func='1';
	calculator.display.value += num3;
	}
	else 
	{
	calculator.display.value += num3;
	}
}

function chistka() {
	calculator.display.value = "";
	document.getElementById('out').innerHTML = "";
}

function Mchistka() {
	memory="";
	document.getElementById('out').innerHTML = "";
}

function Sterka() {
	str = document.getElementById('display').value;
	str=str.substring(0, str.length - 1)
	calculator.display.value = str;
}

function MR() {
	if (memory != "")
	{
	calculator.display.value = memory;
	document.getElementById('out').innerHTML = "";
	}
	
}

function MS() {
	memory=parseFloat(document.getElementById('display').value);
	document.getElementById('out').innerHTML = "";
}

function Mplus() {
	num1 = parseFloat(document.getElementById('display').value);
	memory=memory+num1;
	document.getElementById('out').innerHTML = "";
}

function Mminus() {
	num1 = parseFloat(document.getElementById('display').value);
	memory=memory-num1;
	document.getElementById('out').innerHTML = "";
}

function plus() {
	num1 = parseFloat(document.getElementById('display').value);
	func = '+';
	calculator.display.value = "";
	document.getElementById('out').innerHTML = num1 + '+';
}
function minus() {
	num1 = parseFloat(document.getElementById('display').value);
	func = '-';
	calculator.display.value = "";
	document.getElementById('out').innerHTML = num1 + '-';
}
function umnozh() {
	num1 = parseFloat(document.getElementById('display').value);
	func = '*';
	calculator.display.value = "";
	document.getElementById('out').innerHTML = num1 + '*';
}
function deli() {
	num1 = parseFloat(document.getElementById('display').value);
	func = '/';
	calculator.display.value = "";
	document.getElementById('out').innerHTML = num1 + '÷';
}
function ravno() {
	if (func == '+')
	{
		num2 = parseFloat(document.getElementById('display').value);
		result = num1+num2;
		calculator.display.value = result;
		document.getElementById('out').innerHTML += num2 + '=';
		func = '=';
	}
	if (func == '-')
	{
		num2 = parseFloat(document.getElementById('display').value);
		result = num1-num2;
		calculator.display.value = result;
		document.getElementById('out').innerHTML += num2 + '=';
		func = '=';
	}
	if (func == '/')
	{
		num2 = parseFloat(document.getElementById('display').value);
		if (num2 != 0)
		{
		result = num1/num2;
		calculator.display.value = result;
		document.getElementById('out').innerHTML += num2 + '=';
		func = '=';
		}
		else {
			alert("Деление на ноль невозможно");
		}
	}
	if (func == '*')
	{
		num2 = parseFloat(document.getElementById('display').value);
		result = num1*num2;
		calculator.display.value = result;
		document.getElementById('out').innerHTML += num2 + '=';
		func = '=';
	}
}
	