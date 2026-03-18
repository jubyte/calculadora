const resultado = document.querySelector(".resultado");
const botão = document.querySelectorAll(".botão button");


let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;


function updateResultado(originClear = false) {
    resultado.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}


function addDigit(digit){
    if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;


    if (restart) {
        currentNumber = digit;
        restart = false;
    } else {
        currentNumber += digit;
    }


    updateResultado();
}


function setOperator(newOperator) {
    if (currentNumber) {


        firstOperand = parseFloat(currentNumber.replace(",", "."));
        currentNumber = "";
    }


    operator = newOperator;
}


function calculate () {
    if (operator === null || firstOperand === null)return;
    let secondOperand = parseFloat(currentNumber.replace(",", "."));
    let resultadoValor


    switch (operator) {
        case "+":
            resultadoValor = firstOperand + secondOperand;
            break;


        case "-":
            resultadoValor = firstOperand - secondOperand;
            break;
       
        case "÷":
            resultadoValor = firstOperand - secondOperand;
            break;
        default:
            return;
    }


    if (resultadoValor.toString().split(".") [1]?.length >5) {
        currentNumber = parseFloat (resultadoValor.toFixed(5)).toString();
    } else {
      currentNumber = resultadoValor.toString();
    }


    operator = null;
    firstOperand = null;
    restart = true;
    porcentagemValor = null;
    updateResultado();
}


botão.forEach((button) => {
    buttom.addEventListener("click", () => {
        const buttonText = button.innerText;
        if (/^[0-9,]+$/.test(buttonText)) {
            addDigit(buttonText);
        } else if (["+", "-", "×", "÷"].includes(buttonText)) {
          setOperator (buttonText);
        } else if (buttonText === "=") {
          calculate();
        }
    });
});

