window.onload = inicio;
window.onkeydown = teclado;
var nave;
var x;
var y = 0;
var anchoNavegador;
var anchoNave;
var altoNavegador;
var altoNave;

function inicio(){
    nave = document.querySelector("#nave");
    tomarMedidas();
    x = (anchoNavegador/2)-(anchoNave/2);
    ubicarNave();

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
}

