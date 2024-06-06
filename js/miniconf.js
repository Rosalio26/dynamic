
function slideup(){
    var elem = document.querySelector('.its-content');
    var ell = document.getElementById("show");
    var hidde = document.getElementById("hidden");

    elem.style.display="block";
    ell.style.display = "none";
    hidde.style.display = "block"
};

function slidedown(){
    var elem = document.querySelector('.its-content');
    var ell = document.getElementById("show");
    var hidde = document.getElementById("hidden");

    elem.style.display="none";
    ell.style.display = "block";
    hidde.style.display = "none";
};

//Definindo as variaveis dos botoes
/*var btnVisibley = document.getElementById('btn-hamb');
var btnHidden = document.getElementById('btn-hamb-1');
var contEnt = document.querySelector('.content-itm');
var contentBone = document.querySelector('#esp-itm');
const screns = window.matchMedia('(max-width: 680px)');

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
}*/