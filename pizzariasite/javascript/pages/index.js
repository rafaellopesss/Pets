let card = document.getElementsByClassName('card')
let buttonNext = document.getElementById('buttonNext')
let buttonPrev = document.getElementById('buttonPrev')
let carrinhoCompras = document.getElementById('carrinhoCompras')
let containershopping = document.getElementById('containershopping')
let fecharbotao = document.getElementById('fecharbotao')
let listshoppingcarts = document.getElementById('listshoppingcarts')

const swiper = new Swiper('.all-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
  
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    780: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});


const show = new Swiper('.all', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 450,
  autoplay: {
    delay:2500,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
});


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