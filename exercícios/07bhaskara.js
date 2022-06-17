function bhaskara(ax2, bx, c) {
    let resultados = [] //o resultado é um vetor (array)
    let delta = (bx ** 2) - (4 * ax2 * c) //operação principal
    if(delta < 0){
        return "Delta é negativo"
    } //if roda primeiro, se for falso, vai para a próxima linha
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2) // resultado do +
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2) //resultado do -
    resultados.push(x1) // o push adiciona o resultado à array criada para a variável let
    resultados.push(x2)
    return resultados // retorna o array(vetor) resultados  
}

console.log(bhaskara(4, 1, 9))
console.log(bhaskara(3, 3, 3))
console.log(bhaskara(10, 40, 40))