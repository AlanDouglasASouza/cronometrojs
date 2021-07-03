function tabuada(){
var numero = document.getElementById('txt')
var tab = document.getElementById('sel')
if (numero.value.length == 0){
    alert('Falta informações!')
    
} else {
    var n = Number(numero.value)
    var m = 0
    tab.innerHTML = ""
    while (m <= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${m} = ${n*m}`
        tab.appendChild(item)
        m++
    }
}
}
function apagar(){
    var tab = document.getElementById('sel')  
    tab.innerHTML = ''
    var item = document.createElement('option')
        item.text = `Preencha um número a cima!`
        tab.appendChild(item)
    var n = document.getElementById('txt')
    n.value = ''
    n.focus()
}