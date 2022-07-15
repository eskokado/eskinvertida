let principalVitrine = document.querySelector('.principal__vitrine')
let aside = document.querySelector('.principal__lista--right')
for (i = 0; i < temporadas.length; i++) {
    criarPrincipalItem(temporadas[i])
}

let addItem = document.querySelector(".addItem")

let removeItem = document.querySelector('.removeItem')

addItem.addEventListener('click', addItemReproducao)
removeItem.addEventListener('click', removeItemReproducao)

function criarPrincipalItem(temporada) {
    let li_principal__vitrine = document.createElement('li')
    let principal__item = document.createElement('article')
    principal__item.classList.add('principal__item')

    let principal__item_top = document.createElement('div')
    principal__item_top.classList.add('principal__item--top')

    let h4 = document.createElement('h4')
    let span = document.createElement('span')

    h4.innerHTML = temporada.nome
    span.innerHTML = temporada.temporada
    principal__item_top.appendChild(h4)
    principal__item_top.appendChild(span)

    let principal__item_bottom = document.createElement('div')
    principal__item_bottom.classList.add('principal__item--bottom')

    let p = document.createElement('p')
    let a = document.createElement('a')

    p.innerHTML = temporada.sinopse
    a.classList.add('addItem')
    a.id = temporada.id
    a.href = '#'
    a.innerHTML = 'Adiciona à fila'

    principal__item_bottom.appendChild(p)
    principal__item_bottom.appendChild(a)

    principal__item.appendChild(principal__item_top)
    principal__item.appendChild(principal__item_bottom)

    li_principal__vitrine.appendChild(principal__item)

    principalVitrine.appendChild(li_principal__vitrine)
}

function addItemReproducao(event) {
    criarItemReproducao();
}

function criarItemReproducao() {
    let li_lateral__item = document.createElement('li')
    li_lateral__item.classList.add('lateral__item')

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
    a.href = "#"    
    let a_img = document.createElement('img')
    a_img.src = './assets/img/play-icon.png'
    let a_span = document.createElement('span')    
    a_span.innerHTML = 'Assistir agora'
    a.appendChild(a_img)
    div_lateral_item__center.appendChild(h4)
    div_lateral_item__center.appendChild(p)
    div_lateral_item__center.appendChild(a)

    let button_removeItem = document.createElement('button')
    button_removeItem.classList.add('removeItem')
    button_removeItem.type = "button"

    let button_img_removeItem = document.createElement('img')
    button_img_removeItem.classList.add('lateral__item--right')
    button_img_removeItem.src = './assets/img/trash-icon.png'
    button_removeItem.appendChild(button_img_removeItem)

    li_lateral__item.appendChild(img_lateral__item__left)
    li_lateral__item.appendChild(div_lateral_item__center)
    li_lateral__item.appendChild(button_removeItem)

    aside.appendChild(li_lateral__item)
}


function removeItemReproducao(event) {
    event.preventDefault()
    const elementoHTML = event.target
    elementoHTML.closest("li").remove()
    console.log("Clicou trash")
}