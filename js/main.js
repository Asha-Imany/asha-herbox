// 1. manggil hamburger menu
// 2. manggil navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-close-line')
    navbar.classList.toggle('active')
}