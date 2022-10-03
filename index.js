
const items = ITEMS
const card = document.getElementById('card')
items.map((item, index)=>{

    let divCard = document.createElement('div')

    let avatar = document.createElement('img')
    avatar.setAttribute('src', item.image)

    let dishName = document.createElement('h4')
    dishName.innerText = item.name

    let price = document.createElement('span')
    price.innerText = item.price

    divCard.appendChild(avatar)
    divCard.appendChild(dishName)
    divCard.appendChild(price)

    card.appendChild(divCard)
})



  