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

})

