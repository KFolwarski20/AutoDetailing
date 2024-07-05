const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburgerMenu.classList.toggle('open');
});