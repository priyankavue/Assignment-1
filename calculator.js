function appendToResult(value) {
    document.getElementById('total').value += value;
}

function clearResult() {
    document.getElementById('total').value = '';
}

function calculateResult() {
    const expression = document.getElementById('total').value;
    try {
        const total = eval(expression); //eval is javascript predefined fucntion which provide output result of maths expreesssion
        document.getElementById('total').value = total;
    } catch (e) {
        document.getElementById('total').value = 'Error';
    }
}