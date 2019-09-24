function ocurencias(num, array) {
  let contador = 0;

  array.forEach(element => {
    if (num == element) {
      contador++;
    }
  });

  return contador;
}
