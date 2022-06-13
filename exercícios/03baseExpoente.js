const baseElevada = function(base, exp) {
    return base ** exp
}
console.log(baseElevada(2, 2))
console.log(baseElevada(4, 5))

const baseElevada2 = function(base, exp) {
    return Math.exp(base, exp)
}
console.log(baseElevada2(2, 2))
console.log(baseElevada2(4, 5))