function CambiarABinario(){
  var iNumero = new Number(document.getElementById('numero').value);
  var iBase = new Number(2);
  return ("El número "+iNumero+ " en binario es: "+iNumero.toString(iBase));
}

function CambiarADecimal(){
  var iNumero = document.getElementById('numero').value;
  var decimal = parseInt(iNumero,2);
  return("El número binario "+iNumero+ " es "+decimal);
}
