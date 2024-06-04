let numeros = document.querySelectorAll('.numero');
let texto = document.querySelector('#texto');
let btnsAccion = document.querySelectorAll('.accion');
let limpiar = document.querySelector('.limpiar');
let primerNumero = 0;
let segundoNumero = 0;
let acumulador = 0;
let signo = '';
let primeraVez = true;

numeros.forEach((btn) => {
  btn.addEventListener('click', () => {
    texto.value += btn.value
  })
})

const suma = () => {
  acumulador = acumulador + primerNumero
}

const resta = () => {
  if (primeraVez) {
    acumulador = primerNumero + Math.abs(acumulador)
    primeraVez = false
  } else if (acumulador >= 0) {
    acumulador = Math.abs(acumulador) - primerNumero
  } else {
    acumulador = acumulador - primerNumero
  }
}

const multiplicacion = () => {
  if (acumulador == 0) {
    acumulador = 1
    acumulador = acumulador * primerNumero
  } else {
    acumulador = acumulador * primerNumero
  }
}

const division = () => {
  if (primeraVez) {
    acumulador = primerNumero + acumulador
    primeraVez = false
  } else {
    acumulador = acumulador / primerNumero
  }
}

const igual = () => {

  if (signo == '+') {
    segundoNumero = parseInt(texto.value)
    acumulador = acumulador + segundoNumero
    texto.value = acumulador

  } else if (signo == '-') {
    segundoNumero = parseInt(texto.value)
    acumulador = acumulador - segundoNumero
    texto.value = acumulador

  } else if (signo == '*') {
    segundoNumero = parseInt(texto.value)
    acumulador = acumulador * segundoNumero
    texto.value = acumulador

  } else if (signo == '/') {
    segundoNumero = parseInt(texto.value)
    acumulador = acumulador / segundoNumero
    texto.value = acumulador
  }
}

btnsAccion.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (texto.value == '')
    {
        alert('ingrese un numero')
    }
    else  if (e.target.value != '=') 
    {
      primerNumero = parseInt(texto.value)

      switch (e.target.value) {
        case '+':
          if (signo != '') {
            igual();
          } else {
            suma();
          }
          break;
        case '-':
          if (signo != '') {
            igual();
          } else {
            resta();
          }
          break;
        case '*':
          if (signo != '') {
            igual();
          } else {
            multiplicacion();
          }
          break;
        case '/':
          if (signo != '') {
            igual();
          } else {
            division();
          }
      }

      texto.value = ''
      signo = e.target.value

    } else {
      igual()
      acumulador = 0
      signo = ''
      primeraVez = true;
    }
  })
})

limpiar.addEventListener('click', () => {
  primerNumero = 0;
  segundoNumero = 0;
  acumulador = 0;
  signo = '';
  texto.value = ''
 primeraVez = true;
})