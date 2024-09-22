"use strict";
const alunos = [
    {
        nome: "Daniel",
        cursos: ["Python", "Front-end"],
        idade: 23,
    },
    {
        nome: "Sarah",
        cursos: ["Arquitetura/Urbanismo"],
        idade: 21,
    },
];
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
console.log(exibeAluno(novoAluno));
