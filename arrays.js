const redesSociais = ['Facebook', 'Instagram', 'X'];

for(let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}.`);
}

redesSociais.forEach(function(nRedeSocial, indice) {
    console.log(`#${indice+1} Eu tenho perfil na rede social: ${nRedeSocial}.`)
})

const classe = ['Ana Luiza', 'Daniel', 'Arthur', 'Adam', 'Julia'];

const alunos = classe.map(function(itemAtual) {
    // itemAtual = {
    //     nome: itemAtual,
    //     curso: 'Frontend'
    // }
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos);

const daniel = alunos.find(function(item){
    return item.nome == 'Daniel';
})

console.log(daniel);

const indexDaniel = alunos.findIndex(function(item){
    return item.nome == 'Daniel';
})

console.log(indexDaniel);

alunos.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const alunosFE = alunos.every(function(item){
    return item.curso === 'Frontend';
})

console.log(alunosFE);

const alunoBE = alunos.some(function(item){
    return item.curso === 'Backend';
})

console.log(alunoBE);

function alunosDeBackEnd(classe){
    return classe.curso === 'Backend';
}

const alunosDeBE = alunos.filter(alunosDeBackEnd);

console.log(alunosDeBE);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(accumulador, itemAtual){
    return accumulador += itemAtual;
}, 0)

console.log(soma);

const somaAlunos = alunos.reduce(function(accumulador, itemAtual){
    return accumulador += `${itemAtual.nome} `;
}, '')

console.log(somaAlunos);