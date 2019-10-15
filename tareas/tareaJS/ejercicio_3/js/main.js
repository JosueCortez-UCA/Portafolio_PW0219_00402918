let dias = document.getElementsByClassName("dias");
let bandera = false;
let ultimaSeleccion;

function mostrarDia(dia){
    let articulo = document.getElementById(dia);
    articulo.classList.toggle("hide");

    if (bandera) {
        let ultimoArticulo = document.getElementById(ultimaSeleccion);
        ultimoArticulo.classList.toggle("hide");
    }

    ultimaSeleccion = dia;
    bandera = true;

    return false;
};
/*
document.getElementById("link-day22").onclick = mostrarDia("day-2");
document.getElementById("link-day11").onclick = mostrarDia("day-1");
*/
/*
document.getElementById("link-day11").addEventListener("click", mostrarDia("day-1"), false);
document.getElementById("link-day22").addEventListener("click", mostrarDia("day-2"), false);
*/
/*
for (let index = 0; index < dias.length; index++) {
    dias[index].addEventListener("click", mostrarDia("day-1"));
};
*/

/*
for (let index = 0; index < dias.length; index++) {
    x = document.getElementById("link-day1");
    console.log(x);
}
*/