function somar(){
    var caixa1 = document.getElementById('num')
    var caixa2 = document.getElementById('num2')
    var result = document.getElementById('result')
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var som = numero1 + numero2
    result.innerHTML = som
}

function sub(){
    var caixa1 = document.getElementById('num')
    var caixa2 = document.getElementById('num2')
    var result = document.getElementById('result')
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var subt = numero1 - numero2
    result.innerHTML = subt
}

function mult(){
    var caixa1 = document.getElementById("num")
    var caixa2 = document.getElementById("num2")
    var result = document.getElementById('result')
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var multp = numero1 * numero2
    result.innerHTML = multp
}

function div(){
    var caixa1 = document.getElementById("num")
    var caixa2 = document.getElementById("num2")
    var result = document.getElementById("result")
    var numero1 = Number(caixa1.value)
    var numero2 = Number(caixa2.value)
    var divis = numero1 / numero2
    result.innerHTML = divis
}
