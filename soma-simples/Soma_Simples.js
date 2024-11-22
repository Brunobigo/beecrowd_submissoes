var input = require('fs').readFileSync('D:\\beecrowd_solucoes\\soma-simples\\calculo.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);

const soma = a + b;

console.log("SOMA = " + soma);