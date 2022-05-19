function anagrama(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var str1 = a.split("").sort().join("");
  var str2 = b.split("").sort().join("");

  var resultado = str1 === str2;
  return resultado;
}

console.log(anagrama("abc", "cba"));
console.log(anagrama("Buckethead", "DeathCubeK"));
