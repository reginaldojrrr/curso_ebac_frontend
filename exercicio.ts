const multiplicacao = (numero1: number, numero2: number): number => numero1 * numero2;

const saudacao = (nome: string): string => `Olá ${nome}`;

const resultadoMultiplicacao = multiplicacao(2, 5);
const mensagemSaudacao = saudacao("Reginaldo");

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);