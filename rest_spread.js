//Usando iteração nativa do js sem uso de arrays

function somar (a,b) {
    // // return a + b; normal
    // console.log(arguments) usando o arguments que atua como uma iteração
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 3, 14))

//Rest operation

function somarUsandoRest(...n) {
    const soma = n.reduce((total1, nAtual) => {
        total1 += nAtual;
        return total1;
    }, 0)
    return soma;
}

console.log(somarUsandoRest(10, 20, 3, 14))

//Spread

const numeros = [1, 2, 3, 4, 5];
console.log(...numeros);

const timesDeFutebolSp = ['sao paulo', 'corinthians', 'palmeiras', 'santos'];
const timesDeFutebolRj = ['flamengo', 'fluminense', 'bota fogo', 'vasco'];

// const timesDeFutebol = timesDeFutebolSp.concat(timesDeFutebolRj);
const timesDeFutebol = [...timesDeFutebolSp, ...timesDeFutebolRj];

console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: 'gol',
    marcar: 'vk',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

//desestruturação

const {motor: motorDaJulia} = carroDaJulia;
const {motor: motorDaAna} = carroDaAna;

console.log(motorDaJulia);
console.log(motorDaAna);

//desestruturação de arrays
const [t1, t2, t3, ...outrosTimes] = timesDeFutebol; //usamos rest para pegar o restante dos times

console.log(t1);
console.log(t2);
console.log(t3);
console.log(outrosTimes);