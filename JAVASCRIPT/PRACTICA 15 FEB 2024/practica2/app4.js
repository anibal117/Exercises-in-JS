const centimetrosInput = document.getElementById('centimetros');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

calcularBtn.addEventListener ('click', function() {
  const centimetros = parseFloat(centimetrosInput.value);
  const kilometros = centimetros / 100000;
  resultado.textContent = `${centimetros} cm equivalen a ${kilometros} km`;
});