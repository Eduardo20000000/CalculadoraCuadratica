document.getElementById('btnDf').addEventListener('click', () => {
let getModo = document.getElementById('mode').value
console.log(getModo)
if(getModo > 2 || getModo < 1) return getModo.value = 0, alert("Modo inválido")
    if(getModo == 1){
        let b = Number(document.getElementById('b').value)
        if(!b) return alert("Debes especificar la variable b")
        document.getElementById('desfac').innerHTML = `<h2>Resultado: x² + 2*x*${b} + ${b}² = x² + ${2*b +"x" + "+ "+Math.pow(b, 2)}</h2>`.replaceAll("+ (-", "-").replaceAll("+ -", "- ")

    }
    if(getModo == 2) {
        let e = Number(document.getElementById('e').value)
        let d = Number(document.getElementById('d').value)
        let expresion = `(x² + ${e})(x² + ${d}) = x² + (${e+d}x) + ${e*d}`.replaceAll("+ (-", "-").replaceAll("+ -", "- ")
        document.getElementById('desfac').innerHTML = `<h2>${expresion}</h2>`
    }
})