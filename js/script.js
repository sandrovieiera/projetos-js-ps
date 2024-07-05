
const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value.trim();
    const altura = parseFloat(document.getElementById("altura").value.trim());
    const peso = parseFloat(document.getElementById("peso").value.trim());
    const resultado = document.getElementById("resultado");

    if (nome !== '' && !isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
        const valorImc = (peso / (altura * altura)).toFixed(1);
        let classe = '';

        if (valorImc < 18.5) {
            classe = 'você está abaixo do peso';
        } else if (valorImc >= 18.5 && valorImc < 25) {
            classe = 'você está com o peso normal';
        } else if (valorImc >= 25 && valorImc < 30) {
            classe = 'você está levemente acima do peso';
        } else if (valorImc >= 30 && valorImc < 35) {
            classe = 'você está acima do peso';
        } else {
            classe = 'você está muito acima do peso';
        }

        resultado.textContent = `Olá ${nome}, seu IMC é ${valorImc} e ${classe}.`;
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente.';
    }
}

calcular.addEventListener('click', imc);
