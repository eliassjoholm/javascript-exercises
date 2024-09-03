let display = null;
let memory = null;
let aritmetic = null;

function init() {
    display = document.getElementById("display");
    let keyboard = document.getElementById("keyboard");
    keyboard.onclick = buttonclick;
}

function buttonclick(e) {
    let button = e.target.id;


    if (button.substring(0, 1) === "b") {
        let digit = button.substring(1, 2);
        display.value += digit;
    }
    else {
        if (button === "cl") {
            memory = 0;
            aritmetic = null;
            display.value = '';
        }
        else if (button === "ent") {
            if (aritmetic === null || memory === null || display.value === null) {
                return;
            }
            let finalvalue;

            if (aritmetic === "add") {
                finalvalue = memory + Number(display.value);
            }
            else if (aritmetic === "sub") {
                finalvalue = memory - Number(display.value);
            }
            else if (aritmetic === "mult") {
                finalvalue = memory * Number(display.value);
            }
            else if (aritmetic === "div") {
                finalvalue = memory / Number(display.value);
            }
            display.value = finalvalue;
        }
        else {
            setoperator(button);

        }
    }
}

function setoperator(operator) {
    memory = Number(display.value);
    aritmetic = operator;
    display.value = '';
}

window.onload = init;