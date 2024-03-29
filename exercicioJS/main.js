const form = document.getElementById('form')
const valorA = document.getElementById('a')
const valorB = document.getElementById('b')

const mensagemSucesso = document.querySelector('.sucesso')
const mensagemNeutro = document.querySelector('.neutro')
const mensagemErro = document.querySelector('.erro')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const sucesso = `Valor <b>${valorA.value}</b> é menor que <b>${valorB.value}</b>`
    const error = 'Erro!'
    const neutro = 'Valores Iguais!'

    if (valorA.value < valorB.value){
        
        mensagemSucesso.innerHTML = sucesso
        mensagemSucesso.style.display = 'block'
        mensagemErro.style = ''
        mensagemNeutro.style = ''

        valorA.value = ''
        valorB.value = ''
    }else if (valorA.value == valorB.value){
        
        mensagemNeutro.innerHTML = neutro
        mensagemNeutro.style.display = 'block'
        mensagemErro.style = ''
        mensagemSucesso.style = ''

        valorA.value = ''
        valorB.value = ''
    }else{
        
        mensagemErro.innerHTML = error
        mensagemErro.style.display = 'block'
        mensagemNeutro.style = ''
    }
})

