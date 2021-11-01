//tarea1 


function productos(costo) {
  let productos = prompt("ingresar costo de productos");
  let servicios = prompt("ingresar costo de servicios")
  let costoTotal = parseFloat(productos) + parseFloat(servicios);
  return alert("El costo total de productos y servios: " + costoTotal);
}


//Tarea 2

function ejecutarOperacion(valorTotal, numeroCuotas, operacion) {
    switch (operacion) {
        case "/":
            return valorTotal / numeroCuotas;
            break;
        default:
            return 0;
            break;
    }
}
console.log("10 dividido por 5 es: " + ejecutarOperacion(10, 5, "/"));

function pagoCuotas(valorTotal, numeroCuotas) {
  let resultado = Number(valorTotal) / Number(numeroCuotas);
  return alert("Para un valor " + valorTotal + " en " + numeroCuotas + " cuotas, el valor cuota será: " + resultado);
  
}

pagoCuotas(1000, 5);

//tarea 3


function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100)
}
for (let index = 0; index < 5; index++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO"))
  ,parseFloat(prompt("INGRESAR %")));
    alert(resultado);
}

function descuento(precio, descuento) {
  return (precio + descuento)

}


//Tarea 4

function tiempoEspera(turnos) {
  let tiempoPorTurno = 5;
  alert('para '+ turnos + ' turnos, el tiempo de espera estimado es ' + (turnos * tiempoPorTurno))
}
tiempoEspera(3);

//tarea 5

function calcularPromedio() {
  let persona1 = prompt("Ingrese edad persona 1");
  let persona2 = prompt("Ingrese edad persona 2");
  let persona3 = prompt("Ingrese edad persona 3");
  let p = (parseFloat(persona1) + parseFloat(persona2) + parseFloat(persona3)) / 3;
  return alert("Promedio de edad es: " + p)
}
calcularPromedio();

//Tarea 6
// multiplos de un numero dado
function esMultiplo(numero) {
  for (let index = 1; index <= numero; index++) {
    if (numero % index === 0) {
      alert(index + ' es múltiplo de ' + numero);
    }     
  }
  
}
esMultiplo(parseFloat(prompt("Ingrese número para saber sus múltiplos")));