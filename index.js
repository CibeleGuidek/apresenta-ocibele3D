let anoatual = 2024;
const nomeCompleto = "Zibele";
let idade = 16;
const cursoFaculdade = "Engenharia da computação";
let cidadeatual = "Mondstad";
console.log(`ola eu sou a ${nomeCompleto}, eu tenho ${idade} de idade, moro em ${cidadeatual}, e ano que vem quero fazer ${cursoFaculdade}`);


anoatual = 2025;
idade = 17;


console.log(`Para meu ano que vem, desejo já ter um emprego e começar a juntar dinheiro para a faculdade. Agora tenho ${idade}, e meu nome agora mudou para Cibele, não mais sendo ${nomeCompleto} E eu moro em sao jose dos pinhais agora, não mais em ${cidadeatual}`);

//Agencia de vaiagens

const nomeComprador = "Kaeya";
const cpfComprador = 19875902827222;
const idadeComprador = 20;
const listadeDestinos = new Array(
"bardoseujudas",
"boteco",
"CasadoDilucvulgobebidagratis",
"Casadaklee",
"França"
);

console.log(`Olá senhor ${nomeComprador}!, seu cpf e idade atual consta como o seguinte: ${cpfComprador}, e ${idadeComprador}. Suas compras em nosso sistema já foram devidamente confirmadas, e suas viagens foram marcadas para os seguintes destinos: ${listadeDestinos}`);

console.log(listadeDestinos[0]);
console.log(`Olá senhor ${nomeComprador}!, seu novo destino já foi adicionado a sua lista de interesses!`);
listadeDestinos.push("Quartel-general dos cavaleiros de favonius");
console.log(listadeDestinos);