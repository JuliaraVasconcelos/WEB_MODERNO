const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));
console.log(media.toString(2)); //binário
console.log(typeof media);

// cuidados
console.log(7 / 0);
console.log("10" / 2);
console.log("3" + 2); // vai concatenar porque a string tem preferência
console.log("Show" * 2);
//console.log(10.toString()) não dá pra chamar o literal direto
console.log((10.345).toFixed(2)); //dá pra chamar o literal dentro de parênteses

//Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
console.log(area.toFixed(2));
