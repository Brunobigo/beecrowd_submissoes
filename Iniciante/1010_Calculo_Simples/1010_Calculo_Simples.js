/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário 
de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente 
dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço 
após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

var input = require('fs').readFileSync('.\\Iniciante\\1010_Calculo_Simples\\input.txt', 'utf8');
var lines = input.split('\n');

/**
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
 */

const [codPeca1, numeroPecas1, valorPeca1] = lines[0].split(' ').map(Number);
const [codPeca2, numeroPecas2, valorPeca2] = lines[1].split(' ').map(Number);

const totalPeca1 = numeroPecas1 * valorPeca1;
const totalPeca2 = numeroPecas2 * valorPeca2;

const valorTotal = totalPeca1 + totalPeca2;

console.log('VALOR A PAGAR: R$ ' + valorTotal.toFixed(2)); // VALOR A PAGAR: R$ 15.50