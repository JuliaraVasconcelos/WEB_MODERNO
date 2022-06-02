const funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]() // o resultado dá o mesmo porque o var não tem escopo de função