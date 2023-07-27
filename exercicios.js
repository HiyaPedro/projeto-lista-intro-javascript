// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/*
//EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
*/
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
/*
// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("escreva a altura")
  const largura = prompt("escreva a largura")
  const area = altura * largura
  console.log(area)
}
calculaAreaRetangulo()
*/
/*
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("escreva o ano atual")
const suaIdade = prompt("escreva o ano do seu nascimento")
const idade = anoAtual - suaIdade
console.log(idade)
}
imprimeIdade()
*/
/*
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = (peso / (altura * altura))
return imc
}
calculaIMC(85, 182)
*/
/*
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome1 = prompt("Qual é o seu nome?")
const idade2 = Number(prompt("Qual é sua idade?"))
const email3 = prompt("Escreva o email?")
console.log(`Meu nome é ${nome1}, tenho ${idade2} anos, e o meu email é ${email3}.`)
}
imprimeInformacoesUsuario()
*/
/*
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual é a sua primeira cor favorita?")
const cor2 = prompt("Qual é a sua segunda cor favorita?")
const cor3 = prompt("Qual é a sua terceira cor favorita?")
console.log([cor1, cor2, cor3])
}
imprimeTresCoresFavoritas()
*/
/*
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringUpper = string.toUpperCase()
  return stringUpper
}
*/
/*
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const resultado = custo / valorIngresso
return resultado
}
calculaIngressosEspetaculo(3000, 100)
*/
/*
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let tamanho = string1.length === string2.length
return tamanho
}
*/
/*
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiroE = array
return primeiroE[0]
}
*/

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoE = array
return ultimoE.pop()
}

/*
// EXERCÍCIO 11 
function trocaPrimeiroEUltimo(array) {
  let remove1 = array.shift()
  let remove2 = array.pop()
  let swap1 = array.unshift(remove2)
  let swap2 = array.push(remove1)
  console.log(array)
  return array
  }
  const returnValueNew = trocaPrimeiroEUltimo(remove1, remove2)


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let str1 = string1.toLowerCase()
  let str2 = string2.toLowerCase()
  const result = str1 === str2
  return result

}
checaIgualdadeDesconsiderandoCase()


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 let askDataAtual = prompt("Qual é o ano atual?")
 let askDataDeNascimento = prompt("Qual é o seu ano de nascimento?")
 let askDataDeEmissão = prompt("Em que ano a sua carteira de identidade foi emitido?")
 let ageAtual = askDataAtual - askDataDeNascimento // age of person
 let vencimento = askDataAtual - askDataDeEmissão // expiration date

 const condition1 = ageAtual <= 20 && vencimento <=5 
 const condition2 = ageAtual > 20 && ageAtual <= 50 && vencimento <=10 
 const condition3 = ageAtual > 50 && vencimento <=15 
 const resultado = condition1 && condition2 && condition3
 console.log(resultado)
}
checaRenovacaoRG()


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const yr4 = ano % 4 === 0 
const yr100 = ano % 100 !== 0 
const yr400 = ano % 400 === 0 
const resultado = (yr4 && yr100) || yr400
return resultado
}
checaAnoBissexto()
*/

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let pergunta1 = prompt("Você tem mais de 18 anos?").toLowerCase()
let pergunta2 = prompt("Você possui ensino médio completo").toLowerCase()
let pergunta3 = prompt("Você possui disponibilidade exclusiva durance os horários do curso?").toLowerCase()
const ans1 = pergunta1 === "sim"
const ans2 = pergunta2 === "sim"
const ans3 = pergunta3 === "sim"
const result = ans1 && ans2 && ans3
console.log(result)

}
checaValidadeInscricaoLabenu() 