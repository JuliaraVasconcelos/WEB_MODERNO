const stringPontuacoes = '10, 20, 20, 8, 25, 3, 0, 30, 1'

function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ") //split transforma a string em array
    let pontuacoesNumber = pontuacoes.map(function(item){
        return parseInt(item)
    })
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoesNumber[0]
    let menorPontuacao = pontuacoesNumber[0]

    for (let i = 1; i < pontuacoesNumber.length; i++) { //length retorna o número de elementos no array
        if(pontuacoesNumber[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoesNumber[i]
            qtdQuebraDeRecords++
        }else if (pontuacoesNumber[i] < menorPontuacao) {
            menorPontuacao = pontuacoesNumber[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))