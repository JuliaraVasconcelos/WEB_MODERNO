const funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //por let ter função de escopo, o código lembra o valor no momento da repetição