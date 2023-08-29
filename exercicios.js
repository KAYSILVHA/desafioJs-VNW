//01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = false;

if(dia){
  console.log("Claro")
}else{
  console.log("Está de Noite")
}

//02 -  Crie um loop for() que exiba apenas números pares no console.log()

for(let i = 0; i <= 20; i++){
  if(i%2===0){
    console.log(i)
  }
}

//03 - crie uma função que exiba uma mensagem no console

function mensagem(){
  console.log("Olá! Tudo Bom?")
}

mensagem()


//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibirNome(nome){
  console.log(nome)
}

exibirNome("Kayra S. Cardoso")


//05 -  crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function exibirInformacoes(nome, idade, estiloMusical){
  console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e meu estilo musical preferido é ${estiloMusical}!`)
}

exibirInformacoes("Kayra", 18, "Country")


// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function exibirMusicaFilme(filme, musica){
  console.log(`Filme Escolhido: ${filme}, Música Escolhida: ${musica}`)
}

exibirMusicaFilme("Senhor dos Anéis", "After Dark")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(x){
  return x * 3
}

console.log(triplo(2))

// 08 - crie uma função que  verifique se uma  variável é true ou false

let isTrue = true;

function trueOrFalse(){
  if(isTrue){
    return true
  }else{
    return false
  }
}

console.log(trueOrFalse())

// 09 - Crie um array que receba 5 itens e exiba no console.

let arrayItens = ["Celular", "Computador", "Rádio", "Mouse", "Teclado"]

console.log(arrayItens)


// 10 - Utilize um método para adicionar um nome ao inicio do array.

arrayItens.push("Monitor")
console.log(arrayItens)


// 11 - Utilize um método para remover o último nome do array.

arrayItens.pop()
console.log(arrayItens)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
arrayItens.splice(arrayItens.length, 0, "Relógio", "Tablet")
console.log(arrayItens)

// 13 - Utilize um método para remover o primeiro nome do array.
arrayItens.shift()
console.log(arrayItens)

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort((first, second)=>{
  return first - second
})

console.log(numbers)


// 14 - Crie um objeto que receba ao menos três propriedades sobre você.

let aboutMe = {
  nome: "Kayra",
  idade: 18,
  animalPreferido: "Cachorro",
  MelhorHobby: "Programar"
}
console.log(aboutMe)


// 15 - Adicione uma nova propriedade sem alterar seu objeto inicial.
aboutMe.profissao = "Estudante"
console.log(aboutMe)

// 16 - Remova uma propriedade desse objeto.
delete aboutMe.animalPreferido
console.log(aboutMe)

// 17 - Mostre no console todas as propriedades desse objeto.

for (let propriedade in aboutMe) {
  console.log(propriedade + ": " + aboutMe[propriedade]);
}


// 18 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.

// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
  {
    nome: "Amanda",
    idade: 18,
    telefone: 999999999,
    amigos: ["Rodolfo", "Ailton", "Maria", "Victoria"]
  },
  {
    nome: "Maria",
    idade: 19,
    telefone: 888888888,
    amigos: ["Melissa", "Amanda", "Victória", "Lúcia"]
  },
  {
    nome: "Antonia",
    idade: 20,
    telefone: 7777777777,
    amigos: ["Juliana", "Lucas", "Luiza", "Melissa"]
  },
  {
    nome: "Rodrigo",
    idade: 41,
    telefone: 666666666,
    amigos: ["Leticia", "Carolina", "Antonia", "Gabriel"]
  },
  {
    nome: "João",
    idade: 28,
    telefone: 555555555,
    amigos: ["Gabriela", "Maria", "Julio", "Henrique"]
  }
]



// 19 - Mostre no console o nome de um amigo de cada lista.
let arrayAmigos = []
for(pessoa of cadastro){
  pessoa.amigos.sort()
  let pegarUmAmigo = pessoa.amigos[0]
  arrayAmigos.push(pegarUmAmigo)
}

console.log(arrayAmigos.join(", "))
