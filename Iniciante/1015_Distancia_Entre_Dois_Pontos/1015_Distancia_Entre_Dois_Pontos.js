Timelimit: 1
/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) 
e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

Distancia = V(x2 - x1)² + (y2 - y1)²

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de 
ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 4 casas decimais.
*/

var input = require('fs').readFileSync('.\\1015_Distancia_Entre_Dois_Pontos\\input.txt', 'utf8');
var lines = input.split('\n');

/**
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
 */

const [x1, y1] = lines[0].split(' ').map(Number);
const [x2, y2] = lines[1].split(' ').map(Number);

//const distancia = (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5;
// ou
const distancia = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

console.log(distancia.toFixed(4));