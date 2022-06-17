function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * taxaJuros * tempoAplicacao
}

function jurosCompostos (capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}

console.log(jurosSimples(3, 5/100, 8))
console.log(jurosCompostos(900,6/100,9))