function infoArray(array) {
  var contador;
  var type;
  var impresion = "FIN";

  for (let index = 0; index < array.length; index++) {
    type = typeof array[index];

    array.forEach(element => {
      if (type == typeof element) {
        contador++;
      }
    });

    console.log(` ${type} : ${contador}`);
    contador = 0;
  }

  return impresion;
}
