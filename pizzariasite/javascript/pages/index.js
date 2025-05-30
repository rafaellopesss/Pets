let card = document.getElementsByClassName('card')
let buttonNext = document.getElementById('buttonNext')
let contador = 0
buttonNext.addEventListener('click', () => {
    if (contador < card.length - 1){
        card[contador].style.display = 'none'
        contador ++
        card[contador].style.display = 'block'
        
    }else {
        card[contador].style.display = 'none'
        contador = 0
        card[contador].style.display = 'block'
    }
})