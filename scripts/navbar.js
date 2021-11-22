const navbar = document.querySelector('.nav-list');
const navMenu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.nav-item');

navMenu.addEventListener('click', ()=> {
    navbar.classList.toggle('nav-active');
    navMenu.classList.toggle('toggle');
    if (navbar.classList.value == "nav-list nav-active") {
        navbar.classList.toggle('nav-inactive');
    }
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navItems 0.25s ease-in-out forwards ${index / 10 + 0.1}s`;
        }
    });
});

