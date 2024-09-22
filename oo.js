// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const eevee = new Pokemon("Eevee", "Normal");

class Pokemon {
    // nome = '';
    // tipo = '';

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
}

class Pikashu extends Pokemon {
    constructor() {
        super('Pikashu', 'Eletrico');
    }

    atacar(){
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

const eevee = new Pokemon('Eevee', 'Normal');
const pikashu = new Pikashu();
// eevee.nome = 'Eevee';
// eevee.tipo = 'Normal'

console.log(eevee);
console.log(pikashu);
pikashu.atacar();