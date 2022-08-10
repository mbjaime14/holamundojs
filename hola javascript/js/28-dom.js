"use strict"

function cambiaColor(color) {
    caja.style.background = color
}

var caja = document.querySelector("#micaja");

caja.innerHTML = "texto en la caja con js";
caja.style.background = "red";
caja.style.color = "white" ;


var todosLosDivs = document.getElementsByTagName("div");

var seccion = document.querySelector("#miseccion");
var hr = document.createElement ("hr");


var valor ;
for ( valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement ("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append (texto);
        seccion.append (parrafo);
    }
}

seccion.append(hr);

var divsRojos = document.getElementsByClassName ('rojo');
var divAmarllos = document.getElementsByClassName ('amarillo');
divAmarllos [0].style.background = "yellow" ;


var div;
for(div in divsRojos) {
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
        
    }
}
