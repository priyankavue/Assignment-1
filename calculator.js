function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const expression = document.getElementById('result').value;
    try {
        const total = eval(expression); //eval is javascript predefined fucntion which provide output result of maths expreesssion
        document.getElementById('result').value = total;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}