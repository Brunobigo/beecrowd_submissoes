/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, 
calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, 
sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser 
apresentado com 3 dígitos após o ponto decimal.
*/

var input = require('fs').readFileSync('.\\Iniciante\\1012_Area\\input.txt', 'utf8');
var lines = input.split('\n');

/**
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
 */

const [a, b ,c] = lines[0].split(' ').map(Number);
const pi = 3.14159

const triangulo = a * c / 2; 
const circulo = pi * c ** 2;
const trapezio = (a + b) * c / 2;
const quadrado = b ** 2;
const retangulo = a * b;

console.log('TRIANGULO: ' + triangulo.toFixed(3)); // TRIANGULO: 7.800
console.log('CIRCULO: ' + circulo.toFixed(3)); // CIRCULO: 84.949
console.log('TRAPEZIO: ' + trapezio.toFixed(3)); // TRAPEZIO: 18.200
console.log('QUADRADO: ' + quadrado.toFixed(3)); // QUADRADO: 16.000
console.log('RETANGULO: ' + retangulo.toFixed(3)); // RETANGULO: 12.000