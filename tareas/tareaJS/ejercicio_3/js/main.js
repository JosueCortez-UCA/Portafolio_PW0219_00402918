let dias = document.querySelectorAll(".dias");
let bandera = false;
let ultima_seleccion;

for (let index = 0; index < dias.length; index++) {
    dias[index].addEventListener("click", () => {
        let dia_ruta = dias[index].getAttribute("href").split('#');
        let dia_id = dia_ruta[dia_ruta.length-1];
        
        let dia_seleccionado = document.getElementById(dia_id);
        dia_seleccionado.classList.toggle("hide");

        if (bandera) {
            ultima_seleccion.classList.toggle("hide");
        }
        
        ultima_seleccion = dia_seleccionado;
        bandera = true;
    });
};

document.getElementById("day_1").onclick = dias[0].click();
