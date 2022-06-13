const triangulos = function lados(a, b, c){
    if (a == b && b == c) {
        return 'Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulos(3, 3, 3))
console.log(triangulos(9, 2, 4))
console.log(triangulos(4, 5, 4))