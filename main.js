const form = document.getElementById('form')
const valorA = document.getElementById('a')
const valorB = document.getElementById('b')
const body = document.getElementById('body')

const mensagemSucesso = document.querySelector('.sucesso')
const mensagemNeutro = document.querySelector('.neutro')
const mensagemErro = document.querySelector('.erro')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const sucesso = `Valor <b>${valorA.value}</b> é menor que <b>${valorB.value}</b>`
    const error = 'Erro!'
    const neutro = 'Valores Iguais!'

    const red = '#c84242'
    const green = '#5fc842'
    const yellow = '#a6c842'

    if (valorA.value < valorB.value){
        body.style.backgroundColor = green
        mensagemSucesso.innerHTML = sucesso
        mensagemSucesso.style.display = 'inline-block'
        
        mensagemErro.style = ''
        mensagemNeutro.style = ''

        valorA.value = ''
        valorB.value = ''
    }else if (valorA.value == valorB.value){
        body.style.backgroundColor = yellow
        mensagemNeutro.innerHTML = neutro
        mensagemNeutro.style.display = 'inline-block'
        
        mensagemErro.style = ''
        mensagemSucesso.style = ''

        valorA.value = ''
        valorB.value = ''
    }else{
        body.style.backgroundColor = red
        mensagemErro.innerHTML = error
        mensagemErro.style.display = 'inline-block'
        
        mensagemNeutro.style = ''
        mensagemSucesso.style = ''
    }
})

