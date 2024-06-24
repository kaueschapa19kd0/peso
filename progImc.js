let resposta = document.getElementById("resposta")
console.log(resposta)

function calcular(){
    // entrada de dados
    let altura = Number(document.getElementById("altura").value)

    let peso = Number(document.getElementById("peso").value)

    let nome = document.getElementById("nome").value

    console.log(altura)
    console.log(peso)
    console.log(nome)

    let imc = peso / (altura * altura)

    console.log(imc)

    if((imc > 0 ) && (imc < 17)){
       resposta.innerHTML = "o " + nome + " Está muito abaixo do peso"
       resposta.innerHTML += " O imc é igual a " + imc.toFixed(2)

    }else if((imc >= 17) && (imc < 18.5)){
        resposta.innerHTML = "o " + nome + " Está abaixo do peso"
        resposta.innerHTML += " O imc é igual a " + imc.toFixed(2)
        
    }else if((imc >= 18.5) && (imc < 25)){
        resposta.innerHTML = "o " + nome + " Está com o peso normal"
        resposta.innerHTML += " O imc é igual a " + imc.toFixed(2)

    }else if((imc >= 25) && (imc < 30)){
        resposta.innerHTML = "o " + nome + " Está acima do peso"
        resposta.innerHTML += " O imc é igual a " + imc.toFixed(2)
        
    }else if((imc >= 30) && (imc < 35)){
        resposta.innerHTML = "o " + nome + " Grau de obesidade 1"
        resposta.innerHTML += " O imc é igual a " + imc.toFixed(2)

    }else if((imc >= 35) && (imc < 40)){
        resposta.innerHTML = "o " + nome + " Grau de obesidade 2"
        resposta.innerHTML += " O imc é igual a " + imc.toFixed(2)

    }else if((imc >= 40)){
        resposta.innerHTML = "o " + nome + " Grau de obesidade 3"
        resposta.innerHTML += " O imc é igual a " + imc.toFixed(2)

    }else{
        console.log("voce digitou um valor invalido! Digite novamente!")
    }

}



