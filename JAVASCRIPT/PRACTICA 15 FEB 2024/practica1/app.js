
const resultado = document.getElementById('resultado');
const sumarBtn = document.getElementById('sumar');
const restarBtn = document.getElementById('restar');
const reiniciarBtn = document.getElementById('reiniciar');

let contador = 1;

sumarBtn.addEventListener('click', sumar );
  function sumar(){
    contador++;     
    actualizarResultado()
  }
  restarBtn.addEventListener('click', restar );
  function restar(){
    contador--;
    actualizarResultado()
  } 
  
  reiniciarBtn.addEventListener('click', reiniciar);
  function reiniciar(){
   contador=0;
   actualizarResultado()
  }
  
  
  function actualizarResultado() {
    resultado.textContent = contador;
  }

  