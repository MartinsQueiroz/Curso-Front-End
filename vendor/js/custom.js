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
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">New</span>');
    // $('.featured-item:first h4').append('<span class="badge bg-secondary">New</span>');
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(x)
    // $('.featured-item:first h4').fadeOut(x)
    // $('.featured-item:first h4').css('color', '#ff0000')

    $('.featured-item h4').after('Promo')

    $('.featured-item a').on('blur', function(event){

        event.preventDefault();
        alert('Sem estoque');

    })

    
})    