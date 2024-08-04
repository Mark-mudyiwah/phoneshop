import {getProduct} from './products.js'

import { orders } from './orders.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

 const url= new URL(window.location.href)
 

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
   

    const isArriving = now.isBefore(time);
     

let productHtml =`


<div class="delivery-date">
 ${isArriving?'Arriving on:' : 'Delivered on:'} ${matchingItem.deliveryDate}
</div>

<div class="product-main">

<div class="product-image">
 <img  class= "item" src="${product.image}">

</div>
<div class="product-name">
   ${product.name}
</div>
<div class="product-quantity">
 Quantity:${matchingItem.quantity}
</div>

</div>

<div class="progress-container-primary">
<div class="progress-span-container">
<span class="${deliveryProgress< 50 ? 'current-status':''} ">
Preparing
</span>
<span class="${deliveryProgress >= 50 && deliveryProgress < 100 ? 'current-status':''}">

Shipped

</span>

<span class="${deliveryProgress >= 100 ? 'current-status':''}">
Delivered
</span>


</div>
<div class="progress-container">
<div class="progress-bar js-progress-bar"
style ="width:0%"
>

</div>
</div>

</div>

`
 
document.querySelector('.main').innerHTML = productHtml


document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.js-progress-bar');
    progressBar.style.width =  `0%`;

    // Use a timeout to ensure the bar starts from 0 before animating to the target width
    setTimeout(() => {
        progressBar.style.width = `${deliveryProgress}%`;
    }, 100);
});

