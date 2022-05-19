function greet(nome, saudacao) {
  // implementar logica aqui
  return {
    saudacao: saudacao,
    nome: nome,
    frase: nome + " " + saudacao,
  };
}

const retorno = greet("Hello", "Maria");
console.log(retorno.frase);
