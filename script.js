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

window.onhashchange = function (e) {
    const oldURL = e.oldURL.split('#')[1]
    const newURL = e.newURL.split('#')[1]
    const oldMenu = document.querySelector(`nav a[href='#${oldURL}']`)
    const newMenu = document.querySelector(`nav a[href='#${newURL}']`)
    oldMenu && oldMenu.classList.remove('selected')
    newMenu && newMenu.classList.add('selected')
}