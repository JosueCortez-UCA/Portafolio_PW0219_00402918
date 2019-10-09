let journal = [];
let eventos = [];

// Funcion para agregar eventos de un dia
function agregarEvento(){
    let unEvento = document.getElementById("evento").value;
    eventos.push(unEvento);
}

// Funcion para agregar el dia al journal
function addEntry() {
    let accidente;
    let radioBTNS = document.getElementsByName('accident');

    for (let i = 0; i < radioBTNS.length; i++) {
        if (radioBTNS[i].checked) {
            accidente = radioBTNS[i].value;
        }
    } 

    journal.push({eventos, accidente});
}
