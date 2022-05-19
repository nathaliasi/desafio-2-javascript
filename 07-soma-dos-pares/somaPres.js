function paresPositivos(num) {
  num = 10;
  let total = 0;

  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) total += i;
  }
  console.log(`A soma de todos os pares de ${num} é: ${total}`);
}

paresPositivos(1000);
