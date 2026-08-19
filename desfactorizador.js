document.getElementById('btnDf').addEventListener('click', () => {
let getModo = document.getElementById('mode').value
console.log(getModo)
if(getModo > 3 || getModo < 1) return getModo.value = 0, alert("Modo inválido")
    if(getModo == 1){
        let b = Number(document.getElementById('b').value)
        if(!b) return alert("Debes especificar la variable b")
        document.getElementById('desfac').innerHTML = `<h2>Resultado: x² + 2*x*${b} + ${b}² = x² + ${2*b +"x" + "+ "+Math.pow(b, 2)}</h2>`.replaceAll("+ (-", "-").replaceAll("+ -", "- ")

    }
    if(getModo == 2) {
        let e = Number(document.getElementById('e').value)
        let d = Number(document.getElementById('d').value)
        let expresion = `(x + ${e})(x + ${d}) = x² + (${e+d}x) + ${e*d}`.replaceAll("+ (-", "-").replaceAll("+ -", "- ")
        document.getElementById('desfac').innerHTML = `<h2>${expresion}</h2>`
    }
        if(getModo == 3) {
        let a = Number(document.getElementById('a').value)
        let h = Number(document.getElementById('h').value)
        let k = Number(document.getElementById('k').value)
        let expresion = `${a}x² + ${-2*h}x + ${Math.pow(h, 2)+k}\nEl vertice esta ubicado en (${-h}, ${k}\n${a > 0 ? "Tiene una concavidad hacia arriba" : "Tiene una concavidad hacia abajo"})`
        document.getElementById('desfac').innerHTML = `<h2>${expresion}</h2>`


        
    }
})