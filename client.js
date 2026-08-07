//Obtenemos las variables seteadas
let original = "Ax² + Bx + c"

let response = ""
function resolver(a, b, c){
     let discriminante = Math.pow(b, 2) - 4*a*c
//
    let x1 = -b + (Math.sqrt(discriminante))
    let x2 = -b - (Math.sqrt(discriminante))
    console.log(x1)
    let s = 2*a
    x1 = x1/s
    x2= x2/s

    response += `El valor de X en la ecuación ${a}x² + (${b}x) + (${c}) es ${x1} y ${x2}\n`
   
}
function getParabola(a, b, c){
if(a<0) response += "La parabola de la ecuación tiene una orientación negativa :(\n"
if(a>0) response += "La parabola de la ecuación tiene una orientación positiva :)\n"
let verticeX = -b/2*a
let verticeY = fx(verticeX, a, b, c)
 let discriminante = Math.pow(b, 2) - 4*a*c

    response += `El discriminante tiene un valor de ${discriminante}\n`
 response += `El punto ${a > 0 ? "Mínimo" : "Máximo"} de la parabola está ubicado en (${verticeX}, ${verticeY})\n`
}
function fx(x, a, b ,c){
    return a*Math.pow(x, 2) + b*x + c
}
let entrarFunc = document.getElementById('function').addEventListener('click', () => {
    let x = Number(document.getElementById('x').value)
    document.getElementById('ecuation').innerHTML.replace("x", x)
let a = Number(document.getElementById('A').value)
let b = Number(document.getElementById('B').value)
let c = Number(document.getElementById('C').value)
if(!a) return alert("No se puede resolver la cuadratica")
    let result = fx(x, a, b, c)
document.getElementById('ecuation').innerHTML = `${a}*${x}² + (${b}*${x}) + (${c}) = ${result}`
})
let btn = document.getElementById('calc')
btn.addEventListener('click', () => {


let a = Number(document.getElementById('A').value)
let b = Number(document.getElementById('B').value)
let c = Number(document.getElementById('C').value)
let canSolve = false

if(!a) return alert("No puedes tener una cuadrática sin A")
let discriminante = Math.pow(b, 2) - 4*a*c

if(discriminante < 0) response += "La ecuación no tiene soluciones\n"
if(discriminante == 0) response += "La ecuación contiene solo UNA solución\n"
if(discriminante > 0) response += "La ecuación tiene DOS soluciones\n"

if(discriminante >= 0 ) canSolve = true

document.getElementById('ecuation').innerHTML = `<h2>${a}x² + (${+b}x) + (${c})`
if(canSolve) resolver(a, b, c)
getParabola(a, b, c)

document.getElementById('result').innerText = response
response = ""


})

