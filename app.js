const menu= document.querySelector('#mobile-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    (document.querySelector('.navbar__menu')).classList.toggle('active');
})