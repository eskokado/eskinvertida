let addItem = document.querySelector(".addItem")
let aside = document.querySelector('.principal__lista--right')

let removeItem = document.querySelector('.removeItem')

addItem.addEventListener('click', addItemReproducao)
removeItem.addEventListener('click', removeItemReproducao)

function addItemReproducao(event) {
    criarItemReproducao();
}

function criarItemReproducao() {
    let div_lateral__item = document.createElement('div')
    div_lateral__item.classList.add('lateral__item')

    let img_lateral__item__left = document.createElement('img')
    img_lateral__item__left.classList.add('lateral__item--left')
    img_lateral__item__left.src = './assets/img/imagemIcone.png'

    let div_lateral_item__center = document.createElement('div')
    div_lateral_item__center.classList.add('lateral__item--center')
    let h4 = document.createElement('h4')
    h4.innerHTML = 'Maratona Invertida'
    let p = document.createElement('p')
    p.innerHTML = 'Temporada 1'
    let a = document.createElement('a')
    let a_img = document.createElement('img')
    a_img.src = './assets/img/play-icon.png'
    let a_span = document.createElement('span')    
    a_span.innerHTML = 'Assistir agora'
    div_lateral_item__center.appendChild(h4)
    div_lateral_item__center.appendChild(p)
    div_lateral_item__center.appendChild(a_img)

    let a_removeItem = document.createElement('a')
    a_removeItem.classList.add('removeItem')

    let a_img_removeItem = document.createElement('img')
    a_img_removeItem.classList.add('lateral__item--right')
    a_img_removeItem.src = './assets/img/trash-icon.png'
    a_removeItem.appendChild(a_img_removeItem)

    div_lateral__item.appendChild(img_lateral__item__left)
    div_lateral__item.appendChild(div_lateral_item__center)
    div_lateral__item.appendChild(a_removeItem)

    aside.appendChild(div_lateral__item)
}


function removeItemReproducao(event) {
    event.preventDefault()
    const elementoHTML = event.target
    elementoHTML.closest("div").remove()
}