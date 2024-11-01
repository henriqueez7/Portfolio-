let menu = document.querySelector('#menuIcon');
let navMenu = document.querySelector('.menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navMenu.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navMenu.classList.remove('open');
}

