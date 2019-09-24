function adivina(num) {
  let numeros = [];
  for (let index = 0; index < 20; index++) {
    numeros.push(Math.floor(Math.random() * 10));
  }

  let gano = false;
  numeros.forEach(element => {
    if (num == element) {
      gano = true;
    }
  });

  if (gano == true) {
    return "Gano!";
  } else {
    return "Perdio!";
  }
}
