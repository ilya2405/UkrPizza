let cart=JSON.parse(localStorage.getItem("cart")) || []

function addtocart (id,name,price,img){
    let item=cart.find(p => id === p.id)
    if (item){
        item.qty +=1
    }else {
        cart.push({
            id,
            name,
            price,
            img,
            qty: 1
        })
    }

    savecart()
}

function savecart (){
    localStorage.setItem("cart", JSON.stringify(cart))
    updatecartcount()
}

function updatecartcount(){
    let count=cart.reduce((sum,item) => sum+item.qty, 0)
    let el=document.querySelector(".cart-count")
    if(el) el.textContent=count
}

updatecartcount()