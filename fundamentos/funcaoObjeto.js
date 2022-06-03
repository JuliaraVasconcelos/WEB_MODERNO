console.log(typeof Object); //a função pode ser instanciada quando usa a palavra new
console.log(typeof new Object);

const Cliente = function(){} // anotação literal quando coloca os parênteses
console.log(typeof Cliente);
console.log(typeof new Cliente); //função instanciada

class Produto {} //ES 2015 (ES6) 
console.log(typeof Produto);
console.log(typeof new Produto()); //classe instanciada
