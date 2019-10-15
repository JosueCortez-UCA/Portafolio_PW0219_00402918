let dias = document.querySelectorAll(".dias");

for (let index = 0; index < dias.length; index++) {
    dias[index].addEventListener("click", () => {
        let dia = dias[index].getAttribute("href").split('#');
        let id_dia = dia[dia.length-1];
        
        let dia_seleccionado = document.getElementById(id_dia);
        dia_seleccionado.classList.toggle("hide");
    });
};
