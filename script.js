//1 - crie uma função que exiba uma mensagem no console
function OlaMundo(){
    console.log("Olá Mundo");
}
OlaMundo()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome (Dyana){
console.log(`Olá, eu sou ${Dyana}`)
}

nome("Dyana")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function info (nome,idade,musica){
    console.log(`Olá, eu sou ${nome},minha idade é ${idade} e a minha musica favorita é ${musica} `)
}
info("Dyana","26","Acalme meus passos")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function dados (filme, musica){
    console.log(`Olá, um filme que eu gosto ${filme}, e um musica ${musica}`)
}
dados("fuga das galinhas", "sei é bem assim")
//Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo (x){
    return x*3
}
console.log(triplo(10))