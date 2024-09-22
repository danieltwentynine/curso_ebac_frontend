"use strict";
// função de calcular a area
function calculo1(base, altura) {
    return base * altura;
}
//variavel que calcula a area em uma só linha
const calculo2 = (base, altura) => base * altura;
function test() {
    if (10 > 5)
        return '10 > 5, óbvio né!';
    else
        return 5;
}
const result = test();
console.log(result);
