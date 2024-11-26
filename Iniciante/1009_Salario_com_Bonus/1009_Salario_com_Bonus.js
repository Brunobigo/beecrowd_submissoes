/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas 
por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas 
efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão 
(double) com duas casas decimais, representando o salário fixo do vendedor e montante total das 
vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('.\\Iniciante\\1009_Salario_com_Bonus\\input.txt', 'utf8');
var lines = input.split('\n');

/**
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
 */

const nome = lines[0];
const salarioFixo = parseFloat(lines[1]);
const totalVendas = parseFloat(lines[2]);

const comissão = totalVendas * 0.15; // 15%

const salarioFinal = comissão + salarioFixo;

console.log('TOTAL = R$ ' + salarioFinal.toFixed(2)); // TOTAL = R$ 684.54