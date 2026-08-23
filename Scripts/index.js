const btnBotao = document.querySelector("#calcular");
const btnLimpar = document.querySelector("#limpar");
const inputAltura = document.querySelector("#ialtura"); 
const inputPeso = document.querySelector("#ipeso");
const pResultado = document.querySelector("#resultado");
const container = document.querySelector(".container");
const containerCalc = document.querySelector("#containerCalc");
const btnVoltar = document.querySelector("#btnVoltar");
const containerImc = document.querySelector("#containerImc");

function acaoBotao() {
    const alturaDigitada = parseFloat(inputAltura.value.replace(',','.'));
    const pesoDigitado = parseFloat(inputPeso.value.replace(',','.'));
    const ajusteAltura = alturaDigitada/100; 
    const imc = parseFloat(pesoDigitado/(ajusteAltura*ajusteAltura));

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

            pResultado.innerHTML = "SEU IMC É: " + imc.toFixed(2) + " KG/M² <br> <br> CLASSIFICAÇÃO: MAGREZA";
        } else if(imc >= 18.5 && imc <= 24.9){
            containerCalc.style.display = "none";

            containerImc.style.display = "block";
            containerImc.style.opacity = "1";

            pResultado.innerHTML = "SEU IMC É: " + imc.toFixed(2) + " KG/M² <br> <br> CLASSIFICAÇÃO: NORMAL";
        }else if(imc >= 25 && imc <= 29.9){
            containerCalc.style.display = "none";

            containerImc.style.display = "block";
            containerImc.style.opacity = "1";

            pResultado.innerHTML = "SEU IMC É: " + imc.toFixed(2) + " KG/M² <br> <br> CLASSIFICAÇÃO: SOBREPESO";
        }else if(imc >= 30 && imc <= 34.9){
            containerCalc.style.display = "none";

            containerImc.style.display = "block";
            containerImc.style.opacity = "1";

            pResultado.innerHTML = "SEU IMC É: " + imc.toFixed(2) + " KG/M² <br> <br> CLASSIFICAÇÃO: OBESIDADE GRAU I";
        }else if(imc >= 35 && imc <= 39.9){
            containerCalc.style.display = "none";

            containerImc.style.display = "block";
            containerImc.style.opacity = "1";

            pResultado.innerHTML = "SEU IMC É: " + imc.toFixed(2) + " KG/M² <br> <br> CLASSIFICAÇÃO: OBESIDADE GRAU II";
        }else if(imc > 40){
            containerCalc.style.display = "none";

            containerImc.style.display = "block";
            containerImc.style.opacity = "1";

            pResultado.innerHTML = "SEU IMC É: " + imc.toFixed(2) + " KG/M² <br> <br> CLASSIFICAÇÃO: OBESIDADE GRAU III";
        }
        else {
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


