const btnBotao = document.querySelector("#calcular");
const btnLimpar = document.querySelector("#limpar");
const inputAltura = document.querySelector("#ialtura"); 
const inputPeso = document.querySelector("#ipeso");
const pResultado = document.querySelector("#resultado");
/*const pResultadoPeso = document.querySelector("#resultadoPeso");*/

function acaoBotao() {
    const alturaDigitada = parseFloat(inputAltura.value.replace(',','.'));
    const pesoDigitado = parseFloat(inputPeso.value.replace(',','.'));

    const imc = pesoDigitado/(alturaDigitada*alturaDigitada);

    pResultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " kg/m²";
    /*pResultadoPeso.innerHTML = "Seu Peso é: " + pesoDigitado + "kg";*/

}
function limparTudo() { // 2. Cria a função de limpar
    inputAltura.value = ""; // apaga o input altura
    inputPeso.value = "";   // apaga o input peso
    pResultado.innerText = ""; // apaga o resultado da tela
    inputAltura.focus(); // opcional: volta o cursor pra altura
}

btnBotao.addEventListener("click",acaoBotao);
btnLimpar.addEventListener("click", limparTudo);


