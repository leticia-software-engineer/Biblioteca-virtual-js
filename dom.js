var caixa1 = document.getElementById('num')
var caixa2 = document.getElementById('num2')
var result = document.getElementById('result')


function somar(){
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var som = numero1 + numero2
    result.innerHTML = "O resultado da soma entre " +
    numero1 + "+" + numero2 + " foi:  " + som
    
}

function sub(){
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var subt = numero1 - numero2
    result.innerHTML = "O resultado da subtração entre " +
    numero1 + "-" + numero2 + " foi:  " + subt 
}

function mult(){
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var multp = numero1 * numero2
    result.innerHTML =  "O resultado da multiplicacão entre " +
    numero1 + " x " + numero2 + " foi:  " + multp
}

function div(){
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var divis = numero1 / numero2
    result.innerHTML = "O resultado da divisão entre " +
    numero1 + " / " + numero2 + " foi:  " + divis
}

function pot(){
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var poten = numero1 ** numero2
    result.innerHTML = "O resultado da potência de base " +
    numero1 + " e expoente " + numero2 + " foi:  " + poten
}
