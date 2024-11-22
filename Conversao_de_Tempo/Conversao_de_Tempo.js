/**
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, 
e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, 
conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('.\\Conversao_de_Tempo\\input.txt', 'utf8');
var lines = input.split('\n');

/**
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
 */

const segundos = parseInt(lines[0]); // segundos

const hor = Math.floor(segundos / 3600);
const min = Math.floor((segundos % 3600) / 60);
const seg = segundos % 60;

console.log(hor + ':' + min + ':' + seg); // 0:9:16