function calculate(oparetor){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

    num1 = Number(number1);
    num2 = Number(number2);

    let result;

    if (oparetor === '+') {
        result = num1 + num2;
    } else if(oparetor === '-'){
        result = num1 - num2;
    } else if(oparetor === '*'){
        result = num1 * num2;
    } else if (oparetor === '/'){
        result = num2 !== 0 ? num1 / num2 : "ভাগ সম্ভব নয়!";
    } else {
        result = 'Illegal operation!';
    }
    document.getElementById('result').innerHTML = result;
}

