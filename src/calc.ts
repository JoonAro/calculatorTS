/* clearDisplay()
inputNumber(number)
calculateResult()
inputOperator(operator) */
const display = (document.getElementById('display') as HTMLInputElement);
//let value: HTMLInputElement = display.value;
if (!display) {
    throw new Error('Could not find display element');
}
const buttons = document.querySelectorAll('button');
let value1: string;
let value2: string;
let oper: string;
/**
 * The current input value as a string.
 */
const inputNumber = (numb: string) => {
    populateDisplay(numb);
}

/**
 * The previous input value as a string.
 */

/**
 * The current operation symbol (+, -, *, /) or null if none.
 */
const inputOperator = (operator?: string): void => {
    value2 = value1;
    console.log(value1);
    value1 = display.value;
    if (operator !== undefined) {

        oper = operator;
        display.value = '0';
    }
    console.log(oper);
    console.log(value2);

}

/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers, or the operation is null, does nothing.
 */
let result: number | string = '';
const calculateResult = () => {
    value2 = value1;
    value1 = display.value;
    if (value2 === '') {
        display.value = '';
        return populateDisplay('Error, parameter missing');
    }
    const firstVal = parseInt(value2);
    const secVal = parseInt(value1);
    if (result.toString() == display.value) {
        display.value = '';
        return populateDisplay("Error, Choose operator first");
    }
    else if (display.value === "Error, Choose operator first") {
        return clearDisplay();
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

}



/**
 * Appends a number to the current input value and updates the display.
 * @param num - The number to append.
 */


/**
 * Sets the current operation and moves the current input value to the previous input value.
 * If there is already a previous input value, calculates the result first.
 * @param op - The operation symbol to set.
 */


/**
 * Clears the current and previous input values and the operation and updates the display.
 */

const clearDisplay = (): void => {
    value1 = '';
    value2 = '';
    display.value = '0';
    result = '';
}


/**
 * Updates the display element with the current input value.
 */
const populateDisplay = (num: string) => {
    console.log(num);
    if (display.value === '0') return display.value = num;
    display.value += num;
}

// Initialize the display with the current input value.


buttons.forEach(button => {
    button.addEventListener('click', (val) => {
        console.log(val);
    })
});