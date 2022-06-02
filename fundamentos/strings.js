const escola = "cod3r";
console.log(escola.charAt(4)); //aparece o caractere no índice chamado (índice é a posição na linha)
console.log(escola.charCodeAt(3)); // retornar valor dentro do unicode
console.log(escola.indexOf("3"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + ('!'));
console.log(escola.replace(3, 'e')); //substitui um indice

console.log('Ana,Maria,Pedro'.split(',')); // transformar uma string em um array

//template string

const nome = "Rebeca";
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template);

// expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase() //uso de função dentro do template string
console.log(`Ei... ${up('cuidado')}!`);

