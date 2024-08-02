import { getDeliveryOption } from "./deliveryOptions.js"
import { getProduct } from "./products.js"
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
export function loadFromStorage(){
    let orders = JSON.parse(localStorage.getItem('orders'))

   // console.log(orders)
    
if (!orders) {
    
    orders =[

    
    
]

}

 return orders
}

 export let orders  = loadFromStorage()
 
 export  function renderFullOrderSummary(orders){

    let orderSummaryHTML = ''

    const today = dayjs()

    const currentDate = dayjs(today)
    let deliveredTime;

 orders.forEach((order)=>{

    let totalQuantity = 0
    let totalCost =0;
   let productHTML =``
   let orderDate;
   let orderId;
   let clientName;
   let clientAddress;
   let clientNumber;
   let clientComment;
 


    order.forEach((product)=>{

        let item = getProduct(product.productId)
        let deliveryOption =getDeliveryOption(product.deliveryOptionId)
        totalCost =product.totalCost
        orderDate = product.orderDate 
        orderId = product.orderId
        clientName = product.clientName
        clientAddress = product.clientAddress
        clientNumber = product.clientNumber
        clientComment = product.clientComment
        deliveredTime = dayjs(product.deliveryDate).format('ddd, DD MMMM YYYY')
        const isArriving = currentDate.isBefore(deliveredTime);
    
    
      

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
                            Quantity :${product.quantity}
                               
                        </div>

                        <div class="shipping-method">
                        Shipping method: ${deliveryOption.method}
                               
                        </div>
                        <div class="arriving-date">
                             ${isArriving ? 'Arriving on' : 'Delivered on'}: 
                            ${product.deliveryDate}
    
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <button class="buy-again">
                        Buy Again
                    </button>
                    <button  class="track-package">
                      <a href = "tracking.html?productId=${item.Id}&orderId=${orderId} ">Track Package</a>
                    </button>
                
                </div>
                </div>
    
                  `
    })

    
    orderSummaryHTML += `
    
      <div class="main">
            <div class="order-properties">
                <div class="order-date">
                     <div class="ordered-on">
                        Ordered On:
                      </div>
                      <div class="ordered-date">
                        ${orderDate}
                      </div>
        
            </div>
                    <div class="order-id">
                   <div class="order-id-text">
                    Order ID
                  </div>
                  <div class="order-id-number">
                        #${orderId}
                  </div>
    
                    </div>
                    
                        <div class="order-cost">
                            <div class="total-cost-text">
                            Total Cost
                              </div>
                              <div class="total-cost-number">
                              $${Number((totalCost)).toFixed(2)}
                              </div>
                
                 </div>
                 
            </div>
            <div class ="address-container">
             <div class="customer-address">Shipping Address:
             <div>${clientAddress}</div>
              </div>
            <div class = "customer-name">
            <div class= "name-text">Name:</div>  
            <div class="actual-name">${clientName}</div> 
            </div>
             <div class="customer-number">
             <div class="number-text">Number:</div>
             
           <div class= "actual-number">${clientNumber}</div>
             
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




 
