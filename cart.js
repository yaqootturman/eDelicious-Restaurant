
cart = JSON.parse(localStorage.getItem('cart')); 

const cartContent = document.getElementById('cart')
let list = document.createElement('ul')
list.setAttribute('class', 'ul-list')

let sum = 0
cart.map((item, index)=>{

    let itemText = document.createElement('p')
    itemText.innerText = item.name

    let itemCount = document.createElement('span')
    itemCount.innerText= item.count

    let totalCount = document.createElement('span')
    totalCount.innerText= item.count * item.price

    sum += (item.count * item.price)
    let liItem = document.createElement('li')
    liItem.setAttribute('class','cart-item')

    let delIcon = document.createElement('img')
    delIcon.setAttribute('src', 'https://img.icons8.com/plasticine/100/000000/filled-trash.png')
    delIcon.setAttribute('class','del-icon' )
    delIcon.setAttribute('id',index)

    delIcon.addEventListener("click", ({target})=>{
        cart.splice(target.id, 1)
        localStorage.setItem('cart', JSON.stringify( cart));
        location.reload();
    })
    liItem.appendChild(itemText)
    liItem.appendChild(itemCount)
    liItem.appendChild(totalCount)
    liItem.appendChild(delIcon)


    list.appendChild(liItem)
})
let summation = document.createElement('h3')
summation.setAttribute('class', 'summation')
summation.innerText = 'Total price : ' + sum

let delAll = document.createElement('button')
delAll.setAttribute('class', 'delete-all')
delAll.innerText = 'Delete All'
delAll.addEventListener("click", ()=>{
    cart= []
    localStorage.setItem('cart', JSON.stringify( cart));
    location.reload();
})

cartContent.appendChild(list)
cartContent.appendChild(summation)
cartContent.appendChild(delAll)
