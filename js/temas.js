const tagBody = document.getElementsByTagName("body");
const btnOscuro =document.getElementById("btnOscuro");
const btnClaro =document.getElementById("btnClaro");

btnOscuro.addEventListener("click", definirTema(0));
btnClaro.addEventListener("click", definirTema(1));

function definirTema(color){
    if (color == 0){
        tagBody.setAttribute("style", "background-image: url(../img/bgd.jpg)");
    } else if (color == 1){
        tagBody.setAttribute("style", "background-image: url(../img/bgl.jpg)");
    };
};