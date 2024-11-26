/*
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B 

pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em 
branco antes e depois da igualdade.
*/

var input = require('fs').readFileSync('.\\1007_Diferenca\\input.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const a = parseFloat(lines[0]);
const b = parseFloat(lines[1]);
const c = parseFloat(lines[2]);
const d = parseFloat(lines[3]);

const diferenca = a * b - c * d;

console.log('MEDIA = ' + diferenca);