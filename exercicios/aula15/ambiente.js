let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do ventor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não existe ou não está presente na variavel [NUM]`)
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
