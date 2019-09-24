function sum(array) {
  let acum = 0;

  array.forEach(element => {
    acum = acum + element;
  });

  return `Sumados : ${acum} , Promedio: ${acum / array.length}`;
}
