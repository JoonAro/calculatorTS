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
 */
const inputNumber = (numb: string) => {
    populateDisplay(numb);
}
/**
 * Updates the display element with the current input value.
 * And clears errors
 */
const populateDisplay = (num: string) => {

    if (display.value.substring(0, 5) === 'Error') {
        return clearDisplay();
    }
    if (display.value === '0') return display.value = num;
    else if (display.value === oper) return display.value = num;
    return display.value += num;
}
/**
 * The current operation symbol (+, -, *, /) or undefined
 * Takes value1 for the calculateResult function
 * Because this function is used only when a operator button is pushed it will display the operator instead of zero
 */
const inputOperator = (operator?: string): void => {
    if (display.value !== oper) {
        value1 = display.value;
    }
    if (operator !== undefined) {
        oper = operator;
        display.value = oper;
    }
}
/** Checks if a character contains a number. If not returns true*/
function isNotNumber(char: string) {
    const result = !/[0-9]/.test(char);
    return result;
}

/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers does nothing.
 */
const calculateResult = () => {
    if (value1 === undefined) {
        clearDisplay('Error, Choose operator first');
    }
    if (value1 === 'NaN') {
        return clearDisplay();
    }
    if (display.value.substring(0, 5) === 'Error') {
        return clearDisplay();
    }
    if (oper === undefined) {
        return clearDisplay("Error, Choose operator first");
    }

    value2 = display.value;
    if (value2 === '') {
        clearDisplay();
        return populateDisplay('Error, parameter missing');
    }
    const firstVal = parseFloat(value1);
    const secVal = parseFloat(value2);

    //all of the calculation as a string
    const countString: string = value1 + oper + value2;

    const valOneLength = value1.length;
    const lastLetter = countString.charAt(countString.length - 1);
    if (countString.substring(valOneLength) === '/0') {
        clearDisplay();
        return populateDisplay("Error, Cannot divide with zero")
    }
    if (countString.substring(1) === '*0') {
        clearDisplay();
    }
    if (result == display.value) {
        return clearDisplay("Error, Choose operator first");
    }
    if (isNotNumber(lastLetter)) {
        return clearDisplay('Error, Second parameter missing');
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
    value2 = '0';
    oper = '';
};
/**
 * Clears the current and previous input values and the operation and updates the display. Also updates the display if error is passed to the function
 */
const clearDisplay = (error?: string) => {
    value1 = '';
    value2 = '';
    display.value = '0';
    result = '';
    oper = '';
    if (error) {
        populateDisplay(error);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
    })
});