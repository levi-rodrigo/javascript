function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente [ERRO]')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex [0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 15){
            // CRIANÇA
            img.setAttribute('src', 'crianca-h.jpg')
        } else if (idade >=15 && idade < 21) {
            // JOVEM
            img.setAttribute('src', 'jovem-h.jpg')
        } else if (idade >=21 && idade < 50) {
            // ADULTO
            img.setAttribute('src', 'adulto-h.jpg')
        } else {
            // IDOSO
            img.setAttribute('src', 'idoso-h.jpg')
        }
       } else if (fsex [1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 15){
            // CRIANÇA
            img.setAttribute('src', 'crianca-m.jpg')
        } else if (idade >=15 && idade < 21) {
            // JOVEM
            img.setAttribute('src', 'jovem-m.jpg')
        } else if (idade >=21 && idade < 50) {
            // ADULTO
            img.setAttribute('src', 'adulta-m.jpg')
        } else {
            // IDOSO
            img.setAttribute('src', 'idosa-m.jpg')
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}