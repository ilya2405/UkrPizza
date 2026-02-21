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
        }
    }
})