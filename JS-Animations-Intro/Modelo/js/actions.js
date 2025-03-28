let id = null

function blueSquare() {
  let ob1 = document.getElementById('obj1')
  let pos1 = 0
  let pos2 = 0
  clearInterval(id)
  id = setInterval(frame, 15)
  function frame(){
    if(pos1 == 440 || pos2 == 220){
      clearInterval(id)
    } else {
      pos1 = pos1 + 2
      pos2++
      ob1.style.left = pos1 + 'px'
      ob1.style.top = pos2 + 'px'
    }
  }
}

function redSquare() {
  let ob2 = document.getElementById('obj2')
  let pos1 = 0
  let pos2 = 0
  clearInterval(id)
  id = setInterval(frame, 15)
  function frame(){
    if(pos1 == 440 || pos2 == 220){
      clearInterval(id)
    } else {
      pos1 = pos1 + 2
      pos2++
      ob2.style.right = pos1 + 'px'
      ob2.style.top = pos2 + 'px'
    }
  }
}

function greenSquare() {
  let ob3 = document.getElementById('obj3')
  let pos1 = 0
  let pos2 = 0
  clearInterval(id)
  id = setInterval(frame, 15)
  function frame(){
    if(pos1 == 440 || pos2 == 220){
      clearInterval(id)
    } else {
      pos1 = pos1 + 2
      pos2++
      ob3.style.left = pos1 + 'px'
      ob3.style.bottom = pos2 + 'px'
    }
  }
}

function purpleSquare() {
  let ob4 = document.getElementById('obj4')
  let pos1 = 0
  let pos2 = 0
  clearInterval(id)
  id = setInterval(frame, 15)
  function frame(){
    if(pos1 == 440 || pos2 == 220){
      clearInterval(id)
    } else {
      pos1 = pos1 + 2
      pos2++
      ob4.style.right = pos1 + 'px'
      ob4.style.bottom = pos2 + 'px'
    }
  }
}

function allSquare(){
  let ob1 = document.getElementById('obj1')
  let ob2 = document.getElementById('obj2')
  let ob3 = document.getElementById('obj3')
  let ob4 = document.getElementById('obj4')
  let pos1 = 0
  let pos2 = 0
  clearInterval(id)
  id = setInterval(frame, 15)
  function frame(){
    if(pos1 == 440 || pos2 == 220){
      clearInterval(id)
    } else {
      pos1 = pos1 + 2
      pos2++
      ob1.style.left = pos1 + 'px'
      ob1.style.top = pos2 + 'px'
      ob2.style.right = pos1 + 'px'
      ob2.style.top = pos2 + 'px'
      ob3.style.left = pos1 + 'px'
      ob3.style.bottom = pos2 + 'px'
      ob4.style.right = pos1 + 'px'
      ob4.style.bottom = pos2 + 'px'
    }
  }

}
