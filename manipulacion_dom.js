var h1 = document.querySelector('h1'); // seleccciona las etiquetas a seleccionar en el html
var p = document.querySelector('p');
var parrafito = document.querySelector('.parrafito');
var input = document.querySelector('input');
var pid = document.getElementById('pid');

h1.innerHTML = 'Modificado desde js' // innerHTML modifica el valor del html de la etiqueta seleccionada con codigo html
h1.innerText = 'Modificado desde js' // innerText modifica solo el texto del html
h1.getAttribute // obtiene el atributo de la etiqueta del html.
h1.setAttribute('class', 'rojo'); // modifica el atributo de la etiqueta del html, por ejemplo una clase css o id
h1.classList.add('verde'); // agrega una clase css a la etiqueta del html
h1.classList.remove('verde'); // elimina la clase agregada
h1.classList.toggle ('verde'); // valida la si la clase existe si no la agrega.

input.value = 'verde'; // modifica al valor por defecto del value

let elementoNuevo = document.createElement('img'); // crea un nuevo elemento

elementoNuevo.setAttribute('src', 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg');

pid.append(elementoNuevo); // agrega un elemento despues del contenido de que ya tenia la etiqueta
