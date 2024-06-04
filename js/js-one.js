
//Configurações da interratividade dos links do header
var  link1 = document.getElementById('lk_itm_1');
var  link2 = document.getElementById('lk_itm_2');
var  link3 = document.getElementById('lk_itm_3');
var  link4 = document.getElementById('lk_itm_4');
var regi = document.getElementById('reg_lk');


link1.addEventListener('mouseenter', entrar);
link2.addEventListener('mouseenter', entrar);
link3.addEventListener('mouseenter', entrar);
link4.addEventListener('mouseenter', entrar);

link1.addEventListener('mouseout', sair);
link2.addEventListener('mouseout', sair);
link3.addEventListener('mouseout', sair);
link4.addEventListener('mouseout', sair);

function entrar() {
    if (entrar) {
        regi.style.borderRadius = '0px';
        link1.style.borderRadius = '20px';
        link2.style.borderRadius = '20px';
        link3.style.borderRadius = '20px';
        link4.style.borderRadius = '20px';
    }
}

function sair(){
    if (sair) {
        regi.style.borderRadius = '20px';
        regi.style.transition = '.5s';
        link1.style.borderRadius = '0px';
        link2.style.borderRadius = '0px';
        link3.style.borderRadius = '0px';
        link4.style.borderRadius = '0px';
    }
}

/*Primeiro Quandro*/
var bdy_lg_bck = document.getElementById('lg_bck_1');
var btn_cnn = document.getElementById('btn_lg_bck_1');
var rar = document.getElementById('ra-rr');

btn_cnn.addEventListener('mouseenter', entrar);
btn_cnn.addEventListener('mouseout', sair); 
btn_cnn.addEventListener('mousemove', mover);

function entrar() {
    if(entrar){
        bdy_lg_bck.style.backgroundColor = '#e89209';
        bdy_lg_bck.style.transition = '.5s';
    }
}

function mover() {
    if(mover){
        bdy_lg_bck.style.backgroundColor = '#e89209';
        bdy_lg_bck.style.transition = '.5s';
    }
}

function sair() {
    if(sair){
        bdy_lg_bck.style.backgroundColor = '#ff6600';
        bdy_lg_bck.style.transition = '.5s';
    }
}

/*Segundo Quandro*/
var bdy_lg_bck_2 = document.getElementById('lg_bck_2');
var btn_cnn_2 = document.getElementById('btn_lg_bck_2');

btn_cnn_2.addEventListener('mouseenter', entra);
btn_cnn_2.addEventListener('mouseout', sai); 
btn_cnn_2.addEventListener('mousemove', mov); 

function entra() {
    if(entra){
        bdy_lg_bck_2.style.backgroundColor = '#e89209';
        bdy_lg_bck_2.style.transition = '.5s';
    }
}

function mov() {
    if(mov){
        bdy_lg_bck_2.style.backgroundColor = '#e89209';
        bdy_lg_bck_2.style.transition = '.5s';
    }
}

function sai() {
    if(sai){
        bdy_lg_bck_2.style.backgroundColor = '#ff6600';
        bdy_lg_bck_2.style.transition = '.5s';
    }
}

/*Terceiro Quandro*/
var bdy_lg_bck_3 = document.getElementById('lg_bck_3');
var btn_cnn_3 = document.getElementById('btn_lg_bck_3');

btn_cnn_3.addEventListener('mouseenter', enta);
btn_cnn_3.addEventListener('mouseout', sAi); 
btn_cnn_3.addEventListener('mousemove', Move); 

function enta() {
    if(enta){
        bdy_lg_bck_3.style.backgroundColor = '#e89209';
        bdy_lg_bck_3.style.transition = '.5s';
    }
}

function Move() {
    if(Move){
        bdy_lg_bck_3.style.backgroundColor = '#e89209';
        bdy_lg_bck_3.style.transition = '.5s';
    }
}

function sAi() {
    if(sAi){
        bdy_lg_bck_3.style.backgroundColor = '#ff6600';
        bdy_lg_bck_3.style.transition = '.5s';
    }
}

/*Quarto Quandro*/
var bdy_lg_bck_4 = document.getElementById('lg_bck_4');
var btn_cnn_4 = document.getElementById('btn_lg_bck_4');

btn_cnn_4.addEventListener('mouseenter', eNta);
btn_cnn_4.addEventListener('mouseout', Sai); 
btn_cnn_4.addEventListener('mousemove', moVe); 

function eNta() {
    if(eNta){
        bdy_lg_bck_4.style.backgroundColor = '#e89209';
        bdy_lg_bck_4.style.transition = '.5s';
    }
}

function moVe() {
    if(moVe){
        bdy_lg_bck_4.style.backgroundColor = '#e89209';
        bdy_lg_bck_4.style.transition = '.5s';
    }
}

function Sai() {
    if(Sai){
        bdy_lg_bck_4.style.backgroundColor = '#ff6600';
        bdy_lg_bck_4.style.transition = '.5s';
    }
}