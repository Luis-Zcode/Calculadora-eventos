let numeros = document.querySelectorAll('.numero');
let texto = document.querySelector('#texto');
let btnsAccion = document.querySelectorAll('.accion');
let primerNumero = 0;
let segundoNumero = 0;
let acumulador = 0;
let signo = '';
let primeraVez = true;
let resul = 0

numeros.forEach((btn) => {
  btn.addEventListener('click', () => {
    texto.value += btn.value
  })
})

btnsAccion.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    
    if (e.target.value == '+' || e.target.value == '-'
      || e.target.value == '/' || e.target.value == '*' || e.target.value == 'clear'
    ) {
      primerNumero = parseInt(texto.value)

      switch(e.target.value){
        case '+':
          acumulador = acumulador + primerNumero
          break;
        case '-':
          if (primeraVez){
            acumulador = primerNumero + Math.abs(acumulador)
            primeraVez = false
          }else if (acumulador >= 0){
            acumulador = Math.abs(acumulador) - primerNumero
          }else{
            acumulador = acumulador - primerNumero
          }break;
        case '*':
          if (primeraVez){
            acumulador = acumulador + primerNumero
            primeraVez = false
          }else {
            acumulador =  acumulador * primerNumero
          }
            break;
        case '/':
          if (primeraVez){
            acumulador = primerNumero + acumulador
            primeraVez = false
          }else {
            acumulador =  acumulador / primerNumero
          }
            break;
        case 'clear':
            primerNumero = 0
            segundoNumero = 0
            acumulador = 0
            signo = ''
            texto.value = ''  
      }

      texto.value = ''
      signo = e.target.value
   
    } else if (e.target.value == '=') {
      
      if (signo == '+') {
        segundoNumero = parseInt(texto.value)
        let resultado = acumulador + segundoNumero
        texto.value = resultado
      
      } else if (signo == '-') {
        segundoNumero = parseInt(texto.value)
        let resultado = acumulador - segundoNumero
        texto.value = resultado
        primeraVez = true
      
      } else if (signo == '*') {
        segundoNumero = parseInt(texto.value)
        let resultado = acumulador * segundoNumero
        texto.value = resultado
        primeraVez = true
        console.log(resultado)
      } else if (signo == '/') {
        segundoNumero = parseInt(texto.value)
        let resultado = acumulador / segundoNumero
        texto.value = resultado
        primeraVez = true
      }
      acumulador = 0
    }
  })
})