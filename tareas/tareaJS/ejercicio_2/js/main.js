let diario = [];
let eventos = [];

// Funcion para agregar eventos de un dia
document.getElementById("btnEvento").onclick = agregarEvento;

function agregarEvento(){
    let unEvento = document.getElementById("evento");
    eventos.push(unEvento.value);
    unEvento.value = "";
}

// Funcion para agregar el dia al journal
document.getElementById("btnSubmit").onclick = agregarDia;
function agregarDia() {
    let accidente;
    let radioBTNS = document.getElementsByName('accident');

    for (let i = 0; i < radioBTNS.length; i++) {
        if (radioBTNS[i].checked) {
            accidente = radioBTNS[i].value;
        }
    } 

    diario.push({eventos, accidente});
    agregarFila(eventos, accidente);
    eventos = [];
}

// Funciona para agregar una fila en el HTML
let agregarFila = (evento, accidente) => {
    let tabla = document.getElementById('bitacoraBody');
    let fila = document.createElement("tr");

    fila.className = "table_active";
    fila.innerHTML = `
          <td class="bitacora-event"> ${evento} </td>
          <td class="bitacora-accedent"> ${accidente} </td>
      `;
  
    tabla.appendChild(fila);
};
