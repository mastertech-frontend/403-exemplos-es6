function somar(...numeros){
  let valor = 0;
  for(let numero of numeros){
    valor += numero;
  }
  return valor;
}
