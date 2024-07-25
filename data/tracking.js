import {getProduct} from './products.js'

import { orders } from './orders.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

 const url= new URL(window.location.href)
 console.log(url)

 const productId = url.searchParams.get('productId')

 const orderId = url.searchParams.get('orderId')

const product = getProduct(productId)


let matchingItem;

orders.forEach((order) => {
    order.forEach((item) => {
        if (item.productId === productId && item.orderId === orderId) {
            matchingItem = item;
        }
    });
});


 
const now = dayjs()

const today = now.format('D')
    
    const orderTime = dayjs(matchingItem.orderDate)

    const time = dayjs(matchingItem.deliveryDate)

    const deliveryTime = time.format('D')

    const orderedTime = orderTime.format('D')
 
    const deliveryProgress = ((today-orderedTime)/(deliveryTime-orderedTime))*100 <= 0 ? 10 :((today-orderedTime)/(deliveryTime-orderedTime))*100
    console.log(deliveryProgress)



let productHtml =`


<div class="delivery-date">
Arriving on: ${matchingItem.deliveryDate}
</div>

<div class="product-main">

<div class="product-image">
 <img  class= "item" src="${product.image}">

</div>
<div class="product-name">
   ${product.name}
</div>
<div class="product-quantity">
 Quantiy:${matchingItem.quantity}
</div>

</div>

<div class="progress-container-primary">
<div class="progress-span-container">
<span>
Preparing
</span>
<span>
Shipped


</span>

<span>
Delivered
</span>


</div>
<div class="progress-container">
<div class="progress-bar js-progress-bar"
style ="width: ${deliveryProgress}%"
>

</div>
</div>

</div>

`
 
document.querySelector('.main').innerHTML = productHtml
