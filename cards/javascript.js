
let criarElemento = () => {
    let nomeAnimal = document.getElementById('nomeAnimal').value
    let descricaoAnimal = document.getElementById('descricaoAnimal').value
    
    let guardaCards = document.getElementById('dad') // Div pai que guarda todos os cards 

    let criarCard = document.createElement('div') // Criei a div de cada card 
    criarCard.setAttribute('class', 'card')

    let criarImagem = document.createElement('img') //Criei a tag img 
    criarImagem.src = 'caramela2.webp'
    criarImagem.setAttribute('class', 'imagemdoanimal')
    
    guardaCards.appendChild(criarCard)
    criarCard.appendChild(criarImagem)

    let sectionDescricao = document.createElement('section')
    sectionDescricao.setAttribute('class', 'descricao')
    
    let titulodescricao = document.createElement('h1')
    titulodescricao.setAttribute('class', 'titulo')
    titulodescricao.innerText = nomeAnimal

    let paragrafodescricao = document.createElement('p')
    paragrafodescricao.setAttribute('class', 'sobreoanimal')
    paragrafodescricao.innerText = descricaoAnimal

    criarCard.appendChild(sectionDescricao)
    localStorage.setItem('')
    sectionDescricao.appendChild(titulodescricao)
    sectionDescricao.appendChild(paragrafodescricao)

}
