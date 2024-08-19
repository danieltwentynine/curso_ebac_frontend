function Entreternimento(tipo){
    this.tipo = tipo;
}

function Anime(nome, eps, studio) {
    this.nome = nome;
    this.eps = eps;
    this.studio = studio;
    
    Entreternimento.call(this, "Anime");
}

function Filme(nome, ano) {
    this.nome = nome;
    this.ano = ano;

    Entreternimento.call(this, "Filme");
}

const anime1 = new Anime("Cyberpunk: Edgerunners", 10, "Trigger");
const anime2 = new Anime("Death note", 37, "Madhouse");

const filme1 = new Filme("Clube da Luta", 1999);

console.log(anime1);
console.log(anime2);
console.log(filme1);