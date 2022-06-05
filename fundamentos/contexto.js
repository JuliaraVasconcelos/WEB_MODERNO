let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando variavel sem let e var
abs = 3 //não fazer isso, quando cria uma variável assim, você adiciona uma variável global no node
console.log(global.abs)

//module.exports = { e: 456, f: fals, g: 'teste'}