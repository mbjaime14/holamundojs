"use strict"

var numeros = [] ;
for ( var i = 0; i < 5 ; i ++) {
    numeros [i] =(parseInt(prompt ("Introduce un numero " + 0)));
}
document.write("<h1>Contenido del array</h1>");
numeros.forEach((numeros,index) => {
   document.write("<strong> + numero + </strong></br>")
});
console.log (numeros);


var busqueda = parseInt (prompt("Busca un numero" , 0));
var posicion = numeros

