let card = document.getElementsByClassName('card')
let buttonNext = document.getElementById('buttonNext')
let buttonPrev = document.getElementById('buttonPrev')
let carrinhoCompras = document.getElementById('carrinhoCompras')
let containershopping = document.getElementById('containershopping')
let fecharbotao = document.getElementById('fecharbotao')
let listshoppingcarts = document.getElementById('listshoppingcarts')
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
    card[contador].style.animation = 'prev 1s normal '
    setTimeout(() => {
        if (contador != 0){
            card[contador].style.display = 'none'
            contador --
            card[contador].style.display = 'block'
            
        }else {
            card[contador].style.display = 'none'
            contador = cardTamanho
            card[contador].style.display = 'block'
        
            

    }
    }, 1050)
    
})

carrinhoCompras.addEventListener('click', () => {
    listshoppingcarts.style.animation = 'pop 0.5s normal'
    containershopping.style.display = 'block'
})

fecharbotao.addEventListener('click', () => {
    listshoppingcarts.style.animation = 'popreverse .4s normal'

    setTimeout(() => {
        containershopping.style.display = 'none'
    }, 380) 

    
})