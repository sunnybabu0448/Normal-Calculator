function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
