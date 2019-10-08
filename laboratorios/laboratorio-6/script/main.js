let carnet = document.querySelector("#carnet_field");
let horario = document.querySelector("#schedule_field");
let llegoTarde = document.querySelector("#late_switch");
let btn_ingresar = document.querySelector("#submit_btn");

let tabla = document.querySelector("#table_body");
let carnet_verif = new RegExp("[0-9]{8}");

let addStudent = (carnet, horario, tarde) => {
  let fila = document.createElement("tr");
  let fechaHora = new Date();

  fila.className = "table_active";
  fila.innerHTML = `
        <th scope='row'>${carnet}</th>
        <td> ${horario} </td>
        <td> ${fechaHora.toLocaleString} </td>
        <td> ${tarde} </td>
    `;

  tabla.appendChild(fila);
};

let verfiTarde = value => {
  if (value) {
    return "Tarde";
  }
  return "A tiempo";
};

btn_ingresar.addEventListener("click", () => {
  let unCarnet = carnet.value;
  let elhorario = horario.options[horario.selectedIndex].text;
  let tarde = verfiTarde(llegoTarde.checked);

  if (carnet_verif.test(unCarnet)) {
    addStudent(unCarnet, elhorario, tarde);
  } else {
    alert("Formato de carnet no valido");
  }
});

carnet.addEventListener("keyup", event => {
  let keyCode = event.keyCode;
  let unCarnet = carnet.value;

  if (keyCode == 13) {
    btn_ingresar.click();
  }

  if (carnet_verif.test(unCarnet)) {
    btn_ingresar.disabled = false;
  } else {
    btn_ingresar.disabled = true;
  }
});
