
let criarElemento = () => {
    debugger
    let guardaCards = document.getElementById('dad')

    let criarCard = document.createElement('div')
    criarCard.setAttribute('class', 'card')

    let criarImagem = document.createElement('img')
    criarImagem.src = {src: 'caramela2.webp'}
    
    criarImagem.setAttribute('class', 'imagemdoanimal')
    
    guardaCards.appendChild(criarCard)
    
}
