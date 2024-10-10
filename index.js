const prompt = require('prompt-sync');
const entrada= prompt();

let anoAtual = 2024; 
const nomeCompleto = "Kimberli";
let idade = 17;
const cursoFaculdade = "Medicina";
let cidadeAtual = "São José dos Pinhais";

console.log(`olá eu sou a ${nomeCompleto} eu tenho ${idade} anos, moro em ${cidadeAtual} e ano que vem quero estar cursando ${cursoFaculdade}`);

anoAtual = 2025;
idade = 18;
cidadeAtual = "Curitiba";

console.log(anoAtual);
console.log(" ")

//Agência de viagens

console.log("Agência de viagens")
console.log(" ")
console.log("------------")
console.log("   LOGIN    ")
console.log("------------")
console.log(" ")

const loginCerto = "Kimberli Assis";
const senhaCerto = "1234";

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto){
  console.log("Login incorreto");
  login = entrada("Digite novamente seu login: ");
  }
while(senha != senhaCerto){
  console.log("Senha incorreta");
  login = entrada("Digite novamente sua senha: ");
}


var nomeComprador = entrada("Qual seria o seu nome?");
const cpfComprador = entrada("Qual seria o seu CPF?");
var idadeComprador = entrada("Qual seria a sua idade?");
const listaDeDestinos= new Array(
  "Los Angeles",
  "Londres",
  "Dubai",
  "Atenas",
  "Krabi"
);

console.log(`Olá senhor ${nomeComprador}, portador do CPF ${cpfComprador} informamos que sua passagem para ${listaDeDestinos} está confirmada, só precisamos da confirmação de sua idade, a seguinte procede? ${idadeComprador} agradecemos sua compreensão`);

console.log(listaDeDestinos[2]);
console.log("")
console.log(`Olá senhor ${nomeComprador}, adicionamos mais uma viagem a sua lista de interesses`);

listaDeDestinos.push("Moscou");

if (idadeComprador<18){
console.log(`infelizmente não podemos lhe vender uma passagem, pois o senhor é menor de idade`) 
}
if (idadeComprador>18){
console.log(`O senhor pode comprar a passagem, aproveite, favor verificar a ${listaDeDestinos} `)
}