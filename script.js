let lista = []

function add() {
    let res = document.getElementById('res')
    let numero = document.getElementById('numero')
    let n = Number(numero.value)
    
    if(n < 1 || n > 100 || lista.includes(n)){
        alert('Número inválido ou ja listado.')
    }
    else {
        lista.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        res.appendChild(item)
    }
    numero.value = ''
    numero.focus()
    lista.sort()
}

function finalizar() {
    let resultado = document.querySelector('article#resultado')
    
    if(lista.length == 0) {
        alert('Adicione valores antes de finalizar.')
    }
    else {
        let maior = lista[lista.length - 1]
        let menor = Math.min.apply(null, lista)
        let soma = 0

        for(let i = 0; i < lista.length; i++) {
            soma += lista[i]
        }

        let media = soma / lista.length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${lista.length} elementos.</p>`
        resultado.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        resultado.innerHTML += `<p>A soma de todos os número adicionados é ${soma}.</p>`
        resultado.innerHTML += `<p>A média de todos os número adicionados é ${media.toFixed(1)}.</p>`
    }
}