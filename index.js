
const items = ITEMS
const card = document.getElementById('card')
items.map((item, index)=>{

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'one-card')

    let avatar = document.createElement('img')
    avatar.setAttribute('src', item.image)

    let container = document.createElement('div')
    container.setAttribute('class','card-container')

    let dishName = document.createElement('h4')
    dishName.innerText = item.name

    let price = document.createElement('span')
    price.innerText = item.price + ' $'

    container.appendChild(dishName)
    container.appendChild(price)

    divCard.appendChild(avatar)
    divCard.appendChild(container)

    card.appendChild(divCard)
})



  