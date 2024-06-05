//Definindo as variaveis dos botoes
var btnVisibley = document.getElementById('btn-hamb');
var btnHidden = document.getElementById('btn-hamb-1');
var contEnt = document.querySelector('.content-itm');
var contentBone = document.querySelector('#esp-itm');

btnVisibley.addEventListener('click', clicOne);
btnHidden.addEventListener('click', clicTwo);

function clicOne() {
    btnVisibley.style.display = "none";
    btnHidden.style.display = "block";
    contEnt.style.display = "block";
    contentBone.style.display = "block";
}

function clicTwo() {
    btnVisibley.style.display = "block";
    btnHidden.style.display = "none";
    contEnt.style.display = "none";
    contentBone.style.display = "block";
}