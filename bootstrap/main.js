$(document).ready(function(){
    $('#input-tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
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
            celular: {
                required: true
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu email.',
            celular: 'Por favor, insira seu celular.',
            checkbox: 'Por favor, aceite os termos.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validator){
            let camposIncorretos = validator.numberOfInvalids()
            
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        },
        errorElement: 'div',
        errorClass: "validation-error",
    })
})