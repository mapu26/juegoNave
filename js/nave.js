window.onload = inicio;
window.onkeydown = teclado;
window.onkeyup = soltarCursores;
var nave;
var x;
var y = 0;
var anchoNavegador;
var anchoNave;
var altoNavegador;
var altoNave;
var crono;
var pulsando = false;

function inicio(){
    nave = document.querySelector("#nave");
    tomarMedidas();
    x = (anchoNavegador/2)-(anchoNave/2);
    ubicarNave();
    crono = setInterval(gravedad, 400)
}

function soltarCursores(){
    pulsando = false;
}


function gravedad(){
    if (y>0 && pulsando == false){
        y--;
        ubicarNave();
    }
}

// Esta funcion toma las medidas del navegador y la nave
function tomarMedidas(){
    anchoNavegador = window.innerWidth;
    anchoNave = nave.offsetWidth;
    altoNavegador = window.innerHeight;
    altoNave = nave.offsetHeight;
}

function ubicarNave(){
    nave.style.bottom = `${y}px`;
    nave.style.left = `${x}px`;
}

function teclado(e){
    let tecla = e.key;
    pulsando = true;
    if (tecla == "ArrowUp"){
        if (altoNavegador-altoNave-30 > y){
            y+=5;
            ubicarNave();
        }
    }
    if (tecla == "ArrowDown"){
        if (y>0){
            y-=5;
            ubicarNave();
        }
    }
    if (tecla == "ArrowRight" && y>0){
        x+=5;
        if (x > anchoNavegador-20){
            x =-anchoNave+20
        }
        ubicarNave();
    }
    if (tecla == "ArrowLeft" && y>0){
        x-=5;
        if (x < -anchoNave + 20){
            x = anchoNavegador - 20;
        }
        ubicarNave();
    }
}

 