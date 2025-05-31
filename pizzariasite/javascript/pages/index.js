let card = document.getElementsByClassName('card')
let buttonNext = document.getElementById('buttonNext')
let buttonPrev = document.getElementById('buttonPrev')
let carrinhoCompras = document.getElementById('carrinhoCompras')
let containershopping = document.getElementById('containershopping')
let fecharbotao = document.getElementById('fecharbotao')
let contador = 0
let cardTamanho = card.length - 1
buttonNext.addEventListener('click', () => {
    if (contador < cardTamanho){
        card[contador].style.display = 'none'
        contador ++
        card[contador].style.display = 'block'
        
    }else {
        card[contador].style.display = 'none'
        contador = 0
        card[contador].style.display = 'block'
    }
})

buttonPrev.addEventListener('click', () => {
    if (contador != 0){
        card[contador].style.display = 'none'
        contador --
        card[contador].style.display = 'block'
    }else {
        card[contador].style.display = 'none'
        contador = cardTamanho
        card[contador].style.display = 'block'

    }
})

carrinhoCompras.addEventListener('click', () => {
    containershopping.style.display = 'block'
})

fecharbotao.addEventListener('click', () => {
    containershopping.style.display = 'none'

})