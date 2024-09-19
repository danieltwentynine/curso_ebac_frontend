const alunos = [ //criação do array de objetos -> alunos / atributos -> nome && nota
    {nome: 'Daniel', nota: 9.9},
    { nome: 'Bruna', nota: 4.0 },
    { nome: 'Carla', nota: 8.3 },
    { nome: 'David', nota: 6.7 }
]

function maiorQueSeis (alunos) { //função que filtra os alunos que tem nota maior que 6
    return alunos.filter(aluno => aluno.nota > 6); //usa-se a função .filter() && aluno seria o parametro
}

const alunosAprovados = maiorQueSeis(alunos); //cria-se uma função para alogar a função

console.log(alunosAprovados); //imprime o resultado

//Criado por Daniel Cardoso - Aluno EBAC