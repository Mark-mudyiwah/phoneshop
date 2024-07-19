import { getProduct } from "./products.js"

export function loadFromStorage(){
    let orders = JSON.parse(localStorage.getItem('orders'))

    console.log(orders)
    
if (!orders) {
    
    orders =[

    
    
]

}

 return orders
}

 export let orders  = loadFromStorage()
 
console.log(orders.length)
 export  function renderFullOrderSummary(orders){

    let orderSummaryHTML = ''

    

 orders.forEach((order)=>{

    let totalQuantity = 0
    let totalCost =0;
   let productHTML =``

    order.forEach((product)=>{

        let item = getProduct(product.productId)

  
        totalQuantity +=product.quantity
        totalCost += item.price*totalQuantity
      

        productHTML +=` <div class="main-flex">
                 
                <div class="product-container">
                    <div class="product-image">
                     <img class = "item-image" src ="${item.image}">
                    </div>
                    <div class="product-infomation">
                        <div class="product-name">
                           ${item.name}
                        </div>
                        <div class="product-quantity">
                            Quantity ${product.quantity}
                               
                        </div>
                        <div class="arriving-date">
                            Arriving on: July 24
    
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <button class="buy-again">
                        Buy Again
                    </button>
                    <button  class="track-package">
                        Track Package
                    </button>
                
                </div>
                </div>
    
                  `
    })

    console.log(totalQuantity)
    console.log(totalCost)

    orderSummaryHTML += `
    
      <div class="main">
            <div class="order-properties">
                <div class="order-date">
                     <div class="ordered-on">
                        Ordered On:
                      </div>
                      <div class="ordered-date">
                          July 12
                      </div>
        
            </div>
                    <div class="order-id">
                   <div class="order-id-text">
                    Order ID
                  </div>
                  <div class="order-id-number">
                        #499240
                  </div>
    
                    </div>
                    
                        <div class="order-cost">
                            <div class="total-cost-text">
                            Total Cost
                              </div>
                              <div class="total-cost-number">
                              $${(totalCost).toFixed(2)}
                              </div>
                
                 </div>
            </div>
                ${productHTML}
            </div>

    
    
    `
 })
  orders.length < 1?
   document.querySelector('.js-order-container').innerHTML =  `<span><span>Sorry, you don't have any orders yet</span></span>`
:
document.querySelector('.js-order-container').innerHTML = orderSummaryHTML

}




 
