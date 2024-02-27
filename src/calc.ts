const display = (document.getElementById('display') as HTMLInputElement);
if (!display) {
    throw new Error('Could not find display element');
}
const buttons = document.querySelectorAll('button');
let value1: string;
let value2: string;
let oper: string;
let result: number | string = '';
/*
 The pushed number buttons value as a string.
 If there was an error on the display and you push a number button it will clear the error and update the display with your number
 */
const inputNumber = (numb: string) => {
    if (Number.isNaN(parseInt(display.value)) === true) {
        return clearDisplay(numb);
    }
    populateDisplay(numb);
}
/**
 * Updates the display element with the current input value.
 */
const populateDisplay = (num: string): string => {
    if (display.value === '0') return display.value = num;
    return display.value += num;
}
/**
 * The current operation symbol (+, -, *, /) or null if none.
 * Takes the value 
 */
const inputOperator = (operator?: string): void => {
    value2 = value1;
    value1 = display.value;
    if (operator !== undefined) {
        oper = operator;
        display.value = '0';
    }
}

/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers does nothing.
 */
const calculateResult = () => {
    value2 = value1;
    value1 = display.value;
    if (value2 === '') {
        display.value = '';
        return populateDisplay('Error, parameter missing');
    }
    const firstVal = parseInt(value2);
    const secVal = parseInt(value1);
    if (result == display.value) {
        display.value = '';
        return populateDisplay("Error, Choose operator first");
    }
    switch (oper) {
        case "/": result = firstVal / secVal;
            break;
        case "*": result = firstVal * secVal;
            break;
        case "+": result = firstVal + secVal;
            break;
        case "-": result = firstVal - secVal;
            break;
    };
    //here we get the result as value 1 so we can resume calculations straight away.
    value1 = result.toString();
    display.value = value1;
    value2 = '';
};
/**
 * Clears the current and previous input values and the operation and updates the display. Also updates the display if numb is passed to the function
 */
const clearDisplay = (numb?: string): void => {
    value1 = '';
    value2 = '';
    display.value = '0';
    result = '';
    if (numb) {
        display.value = numb;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (val) => {
        console.log(val);
    })
});