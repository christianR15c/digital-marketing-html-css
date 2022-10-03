window.onload = function digital_fn() {
    let toggle = document.querySelector('#nav .toggle-btn');
    let collapse = document.querySelector('#nav .collapse');

    toggle.addEventListener('click', function (e) {
        collapse.classList.toggle('active')
    })

    let grid = document.querySelector('#site-main .recent-project-area .images-flex')
    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitwidth: true
    })
}