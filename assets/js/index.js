let numero = 0;
let guardadito = 0;
let contador = 0;

let uno = document.querySelector('.uno')
let dos = document.querySelector('.dos')
let tres = document.querySelector('.tres')
let cuatro = document.querySelector('.cuatro')
let cinco = document.querySelector('.cinco')
let seis = document.querySelector('.seis')
let siete = document.querySelector('.siete')
let ocho = document.querySelector('.ocho')
let nueve = document.querySelector('.nueve')
let cero = document.querySelector('.cero')
let limpiar = document.querySelector('.limpiar')

let mas = document.querySelector('.mas')
let multiplicacion = document.querySelector('.multiplicacion')
let division = document.querySelector('.division')
let resultado = document.querySelector('.resultado')
let resta = document.querySelector('.resta')

let barrabusqueda = document.querySelector('#barrabusqueda')

        uno.addEventListener('click', () => {
            barrabusqueda.value += uno.textContent
        })
        
        dos.addEventListener('click', (e) => {
            barrabusqueda.value += dos.textContent
        })
        
        tres.addEventListener('click', (e) => {
            barrabusqueda.value += tres.textContent
        })
        
        cuatro.addEventListener('click', (e) => {
            barrabusqueda.value += cuatro.textContent
        })
        
        cinco.addEventListener('click', (e) => {
            barrabusqueda.value += cinco.textContent
        })
        
        seis.addEventListener('click', (e) => {
            barrabusqueda.value += seis.textContent
        })
        
        siete.addEventListener('click', (e) => {
            barrabusqueda.value += siete.textContent
        })
        
        ocho.addEventListener('click', (e) => {
            barrabusqueda.value += ocho.textContent
        })
        
        nueve.addEventListener('click', (e) => {
            barrabusqueda.value += nueve.textContent
        })
        
        cero.addEventListener('click', (e) => {
            barrabusqueda.value += cero.textContent
        })
        
        limpiar.addEventListener('click', (e) => {
            barrabusqueda.value = ''
            guardadito = 0
            numero = 0
        })
        
        mas.addEventListener('click', () => {
          guardadito = parseInt(barrabusqueda.value);
          barrabusqueda.value = '';
          operator = '+';
        });

        resta.addEventListener('click', () => {
            guardadito = parseInt(barrabusqueda.value);
            barrabusqueda.value = '';
            operator = '-';
        });

        multiplicacion.addEventListener('click', () => {
          guardadito = parseInt(barrabusqueda.value);
          barrabusqueda.value = '';
          operator = '*';
        });
          
        division.addEventListener('click', () => {
          guardadito = parseInt(barrabusqueda.value);
          barrabusqueda.value = '';
          operator = '÷';
        });
          
        resultado.addEventListener('click', () => {
          numero = parseInt(barrabusqueda.value);
          if (operator === '+') {
            barrabusqueda.value = guardadito + numero;
          } else if (operator === '*') {
            barrabusqueda.value = guardadito * numero;
          } else if (operator === '÷') {
            barrabusqueda.value = guardadito / numero;
          }else if (operator === '-' ) {
            barrabusqueda.value = guardadito - numero;
          }
          guardadito = parseInt(barrabusqueda.value);
          operator = "";
        });