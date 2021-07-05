const $menuOpen = document.querySelector('.menuMobileMain')
const $menuMobile = document.querySelector('.menuMobileIcon');
const $menuMobileShut = document.querySelector('.menuMobileShut');


$menuMobile.addEventListener('click', function(){
    $menuOpen.classList.add('menu-open')
})

$menuMobileShut.addEventListener('click', function(){
    $menuOpen.classList.remove('menu-open')
})

