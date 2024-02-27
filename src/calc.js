var display = document.getElementById('display');
if (!display) {
    throw new Error('Could not find display element');
}
var buttons = document.querySelectorAll('button');
var value1;
var value2;
var oper;
var result = '';
/*
 The pushed number buttons value as a string.
 */
var inputNumber = function (numb) {
    if (parseInt(display.value) === undefined) {
        clearDisplay();
    }
    populateDisplay(numb);
};
/**
 * Updates the display element with the current input value.
 */
var populateDisplay = function (num) {
    console.log(num);
    if (display.value === '0')
        return display.value = num;
    return display.value += num;
};
/**
 * The current operation symbol (+, -, *, /) or null if none.
 */
var inputOperator = function (operator) {
    value2 = value1;
    console.log(value1);
    value1 = display.value;
    if (operator !== undefined) {
        oper = operator;
        display.value = '0';
    }
    console.log(oper);
    console.log(value2);
};
/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers, or the operation is null, does nothing.
 */
var calculateResult = function () {
    value2 = value1;
    value1 = display.value;
    if (value2 === '') {
        display.value = '';
        return populateDisplay('Error, parameter missing');
    }
    var firstVal = parseInt(value2);
    var secVal = parseInt(value1);
    if (result == display.value) {
        display.value = '';
        return populateDisplay("Error, Choose operator first");
    }
    else if (display.value === "Error, Choose operator first") {
        return clearDisplay();
    }
    switch (oper) {
        case "/":
            result = firstVal / secVal;
            break;
        case "*":
            result = firstVal * secVal;
            break;
        case "+":
            result = firstVal + secVal;
            break;
        case "-":
            result = firstVal - secVal;
            break;
    }
    ;
    //here we get the result as value 1 so we can resume calculations straight away.
    value1 = result.toString();
    display.value = value1;
    value2 = '';
};
/**
 * Clears the current and previous input values and the operation and updates the display.
 */
var clearDisplay = function () {
    value1 = '';
    value2 = '';
    display.value = '0';
    result = '';
};
buttons.forEach(function (button) {
    button.addEventListener('click', function (val) {
        console.log(val);
    });
});
