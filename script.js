/* 

console.log("probando")


let myStr = "Hola";
console.log(myStr);

let otroStr = "Adios";
console.log(otroStr);

// setTimeout y setInterval 
// son metodos que nos permiten replicar comportamientos asincronos

// sintaxis
//setTimeout( funcionAEjecutar, tiempoEnMilisegundos )


setTimeout(() => {
  console.log("esto se ejecutá despues de 2 segundos")
}, 2000)

setTimeout(() => {
  console.log("esto se ejecutá despues de 0.5 segundos")
}, 500)

console.log("despues del setTimeout")

// JS primero ejecuta todo lo sincrono
// .. y despues lanza todas las ejecuciones asincronas


const newParrafoNode = document.createElement("p")
newParrafoNode.innerText = "bienvenidos a la pagina"
const bodyNode = document.querySelector("body")
bodyNode.append(newParrafoNode)

setTimeout(() => {
  newParrafoNode.remove()
}, 3000)


// Sintaxis

// setInterval(funcionAEjecutar, tiempoEnMilisegundos)


setInterval(() => {
  console.log("esto se ejecuta cada segundo")
}, 1000)



const counterNode = document.createElement("h1")
counterNode.style.textAlign = "center"
counterNode.innerText = 0
const bodyNode = document.querySelector("body")
bodyNode.append(counterNode)

let intervalId = setInterval(() => {
  counterNode.innerText++

  // 1. forma 1 de detener el intervalo. con condicional dentro del mismo intervalo
  if (counterNode.innerText === "10") {
    clearInterval(intervalId)
  }

}, 1000)

// para deter estas ejecuciones tenemos dos metodos

// clearTimeout( idDelTimeout )
// clearInterval( idDelInterval )

// 2. forma 2 de detener el intervalo. Con un setTimeout
// setTimeout(() => {
//   // detengo el intervalo luego de 10 segundos
//   clearInterval(intervalId)
// }, 10000)

*/

// Animaciones del DOM

const gameBoxNode = document.querySelector("#game-box")
gameBoxNode.style.height = "600px"
gameBoxNode.style.width = "600px"
// offsetWidth // el valor numerico del ancho
// offsetHeight // el valor numerico del alto
gameBoxNode.style.backgroundColor = "lightgray"
gameBoxNode.style.position = "relative" // solo lo hacemos para poder posicionar elementos internos dentro de él

const cubeNode = document.createElement("div")
gameBoxNode.append(cubeNode)
cubeNode.id = "cubito"
cubeNode.style.height = "50px"
cubeNode.style.width = "50px"
cubeNode.style.backgroundColor = "black"
cubeNode.style.position = "absolute"

let cubeY = 40
cubeNode.style.top = `${cubeY}px`

let cubeX = 60 // representa la posición del cubito en el eje X
cubeNode.style.left = `${cubeX}px`

let intervalId = setInterval(() => {

  cubeX += 5
  console.log(cubeX)
  cubeNode.style.left = `${cubeX}px`

  cubeY += 5
  cubeNode.style.top = `${cubeY}px`

  if (cubeX >= 550) {
    clearInterval(intervalId)
  }

}, 50)



