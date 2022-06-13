function formataValor(valor){
    valorReal = `R$ ${valor.toFixed(2).toString().replace('.',',')}`
    console.log(valorReal)
} 
formataValor(0.6 + 0.3)