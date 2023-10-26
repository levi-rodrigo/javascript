let num = [3, 2, 1, 5, 6]
num.push(4)
num.sort()
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Os números do nosso vetor são ${num}`)
let pos = num.indexOf(1)
if (pos == -1){
    console.log(`O número não foi encontrado!`)
} else {
    console.log(`O número foi encontrado, ele está na posição ${pos} do nosso vetor`)
}