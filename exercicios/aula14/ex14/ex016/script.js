function verificar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Digite todos os números para poder avançar')
    } else {
        res.innerHTML = 'Contando... <br> <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo INVÁLIDO! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c +=p) {
                res.innerHTML += `${c} ➡️ `
        }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -=p) {
                res.innerHTML += `${c} ➡️ ` 
            } 
        }
        res.innerHTML += `🏁`
    }
}