
var btn = document.querySelector('.menu-btn-icon');
var bloco = document.querySelector('.fr-chi-fo-mon');

btn.addEventListener('click', () => {
    if (bloco.style.display === 'none' || bloco.style.display === '') {
    bloco.style.display = 'block'; // mostra o bloco
    } else {
    bloco.style.display = 'none'; // esconde o bloco
    }
});