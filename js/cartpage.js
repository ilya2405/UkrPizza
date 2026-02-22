document.addEventListener("DOMContentLoaded",()=> {
    let cart = JSON.parse(localStorage.getItem("cart")) ||[    ]
    let container = document.querySelector(".cart-items")
    let totalEl=document.querySelector(".total")

    function rendercart(){
        container.innerHTML=""
        let total=0
        if (cart.length === 0){
            container.innerHTML="<h3>кошик порожній</h3>"
            totalEl.textContent=""
            return
        }

        cart.forEach (item => {
            total += item.price * item.qty

            container.innerHTML +=
            <div>
                <h3></h3>
                <p></p>
<button>-</button>
<span>${item.qty}</span>
<button>+</button>
<button>видалити</button>                
            </div>
        })   
        totalEl.textContent="разом:" + total + "грн."        
    }

    window.Change.qty = function(id,delta){
        let item = cart.find(id => id,id === id)
        if (!item) return


        item.qty += delta

        if (item.qty <=  0){
            cart = cart.filter(i => i.id !== id)
        }
        save()
    }

    window.removeitem = function(id){
         cart = cart.filter(i => i.id !== id)
         save()
    }

    function save(){
        localStorage.setItem("cart",JSON.stringify(cart))
        rendercart()
    }

    window.openCheckout = function(){
        document.querySelector(".checkout").style.display="block"
    }


    window.confirmOrder -function(){
        alert("Замовлення оформлене!")
        localStorage.removeItem("item")
        location.reload();
    }

    renderCart();
});