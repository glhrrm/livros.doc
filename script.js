$(function () {
    $('#logo-area').click(function () {
        const ix = $(this).index()
        $('#index').toggle(ix === 0)
        $('#produtos').toggle(ix === 1)
        $('#servicos').toggle(ix === 2)
        $('#contato').toggle(ix === 3)
        $('#sobre').toggle(ix === 4)
    });

    $('nav a').click(function () {
        const ix = $(this).index()
        $('#index').toggle(ix === 0)
        $('#produtos').toggle(ix === 1)
        $('#servicos').toggle(ix === 2)
        $('#contato').toggle(ix === 3)
        $('#sobre').toggle(ix === 4)
    });
});