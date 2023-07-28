var h1 = document.getElementsByTagName('h1');
var input1 = document.getElementById('calculo1');
var input2 = document.getElementById('calculo2');
var btn = document.getElementById('btnCalcular');
var p = document.getElementById('resultado');
var form = document.getElementById('formId');

// addEventListener ejecuta una función a partir de un evento, en este caso 'click' es
btn.addEventListener('click', btnOnClick);
//form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    //event.preventDefault(); // esta funcion permite que no se ejecuten funciones por defecto del javascript por ejemplo recargar la pagina al finalizar el formulario
    var resultado = Number(input1.value) + Number(input2.value);
    console.log(resultado);
    p.innerText =  'resultado: ' + resultado;
}
