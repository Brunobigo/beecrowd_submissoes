/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. 
Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 
Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('.\\Iniciante\\1020_Idade_em_Dias\\input.txt', 'utf8');
var lines = input.split('\n');

/**
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
 */

const idadeDias = parseInt(lines[0]);

const ano = Math.floor(idadeDias / 365);
const restoDias = idadeDias % 365;
const mes = Math.floor(restoDias / 30); 
const dia = restoDias % 30;

console.log(ano + ' ano(s)\n' + mes + ' mes(es)\n' + dia + ' dia(s)'); //1 ano(s)
                                                                        //1 mes(es)
                                                                        //5 dia(s)