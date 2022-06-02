const a = {name: 'Teste'}
console.log(a);

const b = a //os endereços foram igualados, atribuição por referência
console.log(b);

b.name = 'Opa'
console.log(b);
console.log(a);

let c = 3 //valor primitivo, a cópia é feita por valor
console.log(c);

let d = c
console.log(d);

d++ //adiciona 1 ao valor
console.log(d);

let valor // não inicializada
console.log(valor);

valor = null //se tiver uma variável, ela não está apontando para nenhum endereço
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //evite usar undefined
console.log(!!produto.preco);
// delete produto.preco

produto.preco = null //sem preço
console.log(!!produto.preco);
console.log(produto);
