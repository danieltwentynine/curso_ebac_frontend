$(document).ready(function(){

    $('#celular').mask('(00) 00000-0000', {
        placeholder: 'Celular'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Celular'
    })

    $('#estado').mask('SS', {
        placeholder: 'UF'
    })

    $('#cep').mask('00.000-000', {
        placeholder: 'CEP'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            num: {
                required: true
            },
            estado: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validator){
            let camposIncorretos = validator.numberOfInvalids()
            
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})