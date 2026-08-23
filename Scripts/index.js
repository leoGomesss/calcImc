const btnBotao = document.querySelector("#calcular");
const btnLimpar = document.querySelector("#limpar");
const inputAltura = document.querySelector("#ialtura"); 
const inputPeso = document.querySelector("#ipeso");
const pResultado = document.querySelector("#resultado");
const container = document.querySelector(".container"); // pega a div
const containerCalc = document.querySelector("#containerCalc"); // pega a div
/*const pResultadoPeso = document.querySelector("#resultadoPeso");*/
const btnVoltar = document.querySelector("#btnVoltar"); // novo botão

// CORRIGIDO - pega as divs certas

const containerImc = document.querySelector("#containerImc"); // a classificação

function acaoBotao() {
    const alturaDigitada = parseFloat(inputAltura.value.replace(',','.'));
    const pesoDigitado = parseFloat(inputPeso.value.replace(',','.'));

    const imc = parseFloat(pesoDigitado/(alturaDigitada*alturaDigitada));

    if (!alturaDigitada || !pesoDigitado) {
        pResultado.innerText = "Digite altura e peso!";
        return;
    }else {

        if(imc < 18.5){
            // Esconde a calculadora
            containerCalc.style.display = "none";

            // Mostra a classificação
            containerImc.style.display = "block";
            containerImc.style.opacity = "1";

            pResultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " kg/m² <br> <br> Classificação: Magreza";
        } else {
            // Se IMC for maior que 18, mantém calculadora aparecendo
            containerCalc.style.display = "block";
            containerImc.style.display = "none";
    }
    }    

}

function limparTudo() { // 2. Cria a função de limpar
    inputAltura.value = ""; // apaga o input altura
    inputPeso.value = "";   // apaga o input peso
    pResultado.innerText = ""; // apaga o resultado da tela
    inputAltura.focus(); // opcional: volta o cursor pra altura
}

function voltarParaCalculadora() {
    // Mostra a calculadora de novo
    containerCalc.style.display = "flex";
    
    // Esconde a tela de resultado
    containerImc.style.display = "none";
    containerImc.style.opacity = "0";

    // Opcional: limpa os campos
    // inputAltura.value = "";
    // inputPeso.value = "";
}

btnBotao.addEventListener("click",acaoBotao);
btnLimpar.addEventListener("click", limparTudo);
btnVoltar.addEventListener("click", voltarParaCalculadora);


