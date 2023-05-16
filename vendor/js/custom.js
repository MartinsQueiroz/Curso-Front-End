// instancia jQuery e evita conflitos
// jQuery(function($){
$(document).ready(function () {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') //seletor de tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log($('h4').text());

    // Configuração de produtos
    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">New</span>');

    $('.featured-item h4').after('Promo')

    $('.featured-item a').on('blur', function (event) {

        event.preventDefault();

        alert('Sem estoque');

    })

    /*
    * callback
    * entendo ações que começam ao termino de outra
    */
    $('.featured-item:nth(1)')
        .hide(2000, function () {
            //este é o callback
            console.log($(this).find('h4').text() + ' esgotado')
        })

        .show(2000, function () {
            console.log($(this).find('h4').text() + ' em estoque')
        })


    /*
    * Animações
    */
    const duracao = 1000 // equivalente a 1 segundo

    $('.featured-item:nth(0)')
        .hide(duracao)
        .show(duracao)
        .fadeOut(duracao)
        .fadeIn(duracao)
        .toggle(duracao)
        .toggle(duracao)

    $('#form-submit').on('click', function (e) {
        e.preventDefault()

        if ($('#email').val() != '') {

            $('#email').animate({
                opacity: "toggle",
                top: "-50"


            }, duracao, function () {
                console.log($(this).val())
            })
        }
    });

    /*
    * Ouvinte de eventos .nav-modal-open
    */
    $('.nav-modal-open').on('click', function (e) {
        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#' + elem).html())
        $('.modal-title h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show()
    })

    /*
    * validação de formulario
    */
    function validate(elem) {
        if (elem.val() == '') {
            console.log('O campo de ' + elem.attr('name') + ' é obrigatório')
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')

            return false
        } else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    }

    $('body').on('submit', '.modal-body .form', function (e) {
        e.preventDefault()
        const inputName = $('#nome')
        const inputEmail = $('#email')

        validate(inputName)
        validate(inputEmail)

        if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
            console.log('Verificar campos obrigatórios')
            return false
        } else {
            $(this).submit()
        }
    })

    $('body').on('blur', '#nome', function () {
        validate($(this))
     })
})