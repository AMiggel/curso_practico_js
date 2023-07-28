prompt(json); // return a window object with an input field
Object.values() /// devuelve propiedades del objeto


//uso basico de objetos, para reducir condicionales los objetos en js son parecidos a los enum en java

let tipoSuscripciones = {
    free: "cursos gratis",
    basic: "acceso a la mayoria de los cursos",
    expert: "acceso a todos los cursos"
};

function tipoSuscripcion(suscripcion){
    if(tipoSuscripciones[suscripcion]){
        console.log("TipoSuscripcion: " + tipoSuscripciones[suscripcion]);
        return;
    }
    console.warn("no existe tipoSuscripcion");
}

tipoSuscripcion("free");

console.log(tipoSuscripcion.apellido); 
console.log(tipoSuscripcion['apellido']); // accede a la propiedad del objeto indicada. 