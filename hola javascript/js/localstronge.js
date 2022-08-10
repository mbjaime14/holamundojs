"use strict"


var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener ('submit' , function ()

{
    var titulo = document.querySelector('#addpelicula'). value;
    if(titulo.length <= 0){
        localStorage.setItem(titulo, titulo);
    }

})

var ul = document.querySelector ('#peliculas-list')
for(var i in localStorage){
    console.log (localStorage[i]);
    if(typeof localStorage [i]){
        var li = document.createElement("li");
       li.append(localStorage[i]);
       ul.append()
    } 
   
}
