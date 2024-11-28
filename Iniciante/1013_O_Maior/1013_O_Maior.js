/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido 
da mensagem “eh o maior”. Utilize a fórmula: maiorAB = (a+b+abs(a-b)) / 2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, 
portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

var input = require('fs').readFileSync('.\\Iniciante\\1013_O_Maior\\input.txt', 'utf8');
var lines = input.split('\n');

/**
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
 */

const [a, b, c] = lines[0].split(' ').map(Number);

const maiorAB = (a + b + Math.abs( a - b)) / 2;
const maiorABC = (maiorAB + c + Math.abs( maiorAB - c)) / 2;

console.log(maiorABC +' eh o maior'); // 106 eh o maior
