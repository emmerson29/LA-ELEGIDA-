// ACTIVAR O DESACTIVAR LA CANTIDAD DE CADA COCA

let filasProducto = document.querySelectorAll(".producto-fila");

filasProducto.forEach(function(fila) {

    let casilla = fila.querySelector(".coca");
    let cantidad = fila.querySelector(".cantidad");

    casilla.addEventListener("change", function() {

        cantidad.disabled = !casilla.checked;

        if (!casilla.checked) {
            cantidad.value = "";
        }

    });

});


// COMPROBAR LAS CALIDADES Y CANTIDADES

function validarProductos() {

    let filas = document.querySelectorAll(".producto-fila");

    let haySeleccion = false;
    let todasCorrectas = true;

    filas.forEach(function(fila) {

        let casilla = fila.querySelector(".coca");
        let cantidad = fila.querySelector(".cantidad");

        if (casilla.checked) {

            haySeleccion = true;

            if (cantidad.value === "" ||
                Number(cantidad.value) < 1 ||
                !Number.isInteger(Number(cantidad.value))) {

                todasCorrectas = false;

            }

        }

    });

    return haySeleccion && todasCorrectas;

}


// VALIDAR Y ENVIAR EL FORMULARIO

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let entrega = document.getElementById("entrega").value;
    let mayor = document.getElementById("mayor").checked;


    if (nombre === "" || telefono === "" ||
        entrega === "" || !mayor || !validarProductos()) {

        alert("Por favor, complete correctamente todos los datos.");

    } else {

        alert("¡DATOS ENVIADOS CORRECTAMENTE!");

        document.getElementById("formulario").reset();

        // Volver a desactivar las cantidades

        filasProducto.forEach(function(fila) {

            fila.querySelector(".cantidad").disabled = true;

        });

    }

});