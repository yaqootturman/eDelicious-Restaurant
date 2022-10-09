
const items = ITEMS
const card = document.getElementById('card')
let cart = []

items.map((item, index)=>{

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'one-card')

    let avatar = document.createElement('img')
    avatar.setAttribute('src', item.image)
    avatar.setAttribute('id',index )


    let container = document.createElement('div')
    container.setAttribute('class','card-container')
    container.setAttribute('id',index )

    let dishName = document.createElement('h4')
    dishName.innerText = item.name

    let price = document.createElement('span')
    price.innerText = item.price + ' $'

    container.appendChild(dishName)
    container.appendChild(price)

    divCard.appendChild(avatar)
    divCard.appendChild(container)

    card.appendChild(divCard)
    divCard.addEventListener("click",({target})=>{
        if(container.id== target.id){
            divCard.style.border = "thick solid rgb(154, 154, 176)";
        }
        updateCart(target)
    })
})

const updateCart= (target)=>{
    let returnValue = window.prompt(`How many ${items[target.id].name} you want to add`);
    let obj = items[target.id]
    returnValue == null ? '' : returnValue
    obj ={...obj,count : returnValue }
    cart.push(obj)
    localStorage.setItem('cart', JSON.stringify( cart));
}