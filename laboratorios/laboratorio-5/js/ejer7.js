function fibonacci(n) {
  let primero = 1;
  let segundo = 2;

  for (let index = 3; index < n; index++) {
    let temp = primero + segundo;
    console.log(temp);
    primero = segundo;
    segundo = temp;
  }

  if (n <= 2) {
    return 1;
  }

  return primero + segundo;
}
