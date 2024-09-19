//Executando de forma tradicional

function funcaoPesada() {
    let execucoes = 0;

    for(let i = 0; i < 1000000000; i++){
        execucoes++;
    }
    return execucoes;
}

console.log("Inicio");
console.log(funcaoPesada());
console.log("Fim");

console.log("---------------------");
//Agora com Promise

//Promise com parametros

const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;

        for(let i = 0; i < 1000000000; i++){
            execucoes++;
        }
        resolve(execucoes);
    }catch(e) {
        reject(e);
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o user: ${login}`);
        }, 3000)
    })
}

// console.log("Inicio");
// funcaoPesadaPromise.then(resultado => console.log(resultado));
// console.log("Fim");

// console.log("---------------------");

//Async e await

async function execucaoPrincipal() {
    console.log("Inicio");

    promiseComParametros('crimsonglade@gmail.com', 123456789).then(resultado => {
        console.log(resultado);
    })

    
    await funcaoPesadaPromise.then(resultado => console.log(resultado));
    console.log("Fim");
}

execucaoPrincipal();