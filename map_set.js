// MAP

let meuMap = new Map();

meuMap.set("nome", "Daniel");
meuMap.set("stack", "html, css, javascript");

console.log(meuMap);

console.log(meuMap.get("nome")); //pegar o valor(es) da chave

console.log(meuMap.size); //pegar o tamanho do "array" do meuMap

console.log(meuMap.has("sobrenome")); //true or false, tem ou n valor nessa chave?

// meuMap.clear(); //reseta o map -> meuMap

console.log(meuMap.size); // verifica novamente o tamanho do meuMap

for (let chave of meuMap.keys()){  // iteração das chaves existentes
    console.log(chave);
}

for (let valor of meuMap.values()){  // iteração dos valores existentes
    console.log(valor);
}

// [ "nome" => "Daniel"]
// [ "stack" => "html, css, javascript"]
// em forma de tabela ambos - chaves e valores

for (let entradas of meuMap.entries()){
    console.log(entradas);
}

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave} => ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// SET

const cpfs = new Set();

cpfs.add('1234567890');
cpfs.add('0987654321');

console.log(cpfs);

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ["Daniel Cardoso", "Liam", "Luke Silver", "Jack Rudy", "Liam"];

const arrayComoSet = new Set([...array]);

const arraySemItemDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItemDuplicados);