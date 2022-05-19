let frase = `Lorem Ipsum is simply dummy text' of the printing and typesetting industry.`,
  letras = {};

for (let num = 0; num < frase.length; num++) {
  if (letras[frase[num]]) {
    letras[frase[num]]++;
  } else {
    letras[frase[num]] = 1;
  }
}
console.log(letras);
