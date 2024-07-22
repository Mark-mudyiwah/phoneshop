import { cart,removeFromCart,updateDeliveryOption } from "../../data/cart.js";
import { products,getProduct }from '../../data/products.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { deliveryOptions,getDeliveryOption,calculateDeliveryDate } from "../../data/deliveryOptions.js";
import { updatingItemQuantity,denyingCommas,placingOrder } from "../checkout.js";
import { renderPaymentSummary } from "./paymentSummary.js";



export function renderOrderSummary(){
let cartItemsHTML='';

cart.forEach((cartItem)=>{
const productId = cartItem.productId

const matchingProduct = getProduct(productId);

const deliveryOptionId = cartItem.deliveryOptionId

const deliveryOption= getDeliveryOption(deliveryOptionId)
 
//this code takes the delivery option/date we selected and calculate it so that we can use it down in our code
 const dateString = calculateDeliveryDate(deliveryOption)
 
cartItemsHTML+=`<div class="all-item-info-div 
js-all-items-info-${matchingProduct.Id}">

<div class="item-delivery-date">
<div class="delivered-text">
    Delivery Date : 
</div>
<div class="actual-delivery-date">
 ${dateString}
</div>
</div>
<div class="product-container">
    
 <div class="product-info">

    <div class="item-image-container">
        
        <img class="item" src="${matchingProduct.image}">
    </div>

    <div>

    <div class="item-info">

 
<div class="item-name">
  ${matchingProduct.name}
</div>

 
<div class="item-price">
    ${matchingProduct.getPriceUrl()}
</div>

<div class="quantity-info">

<div class="quantity-text">
    <div>Quantity:</div>
</div>
<div class="item-quantity js-item-quantity-${matchingProduct.Id}">
    ${cartItem.quantity}
</div>
  </div>
  <div class = "quatity-update-buttons">
  <button class="update-button js-update-button"
  data-product-id="${matchingProduct.Id}">
    Update</button>
    <input type="number" class="quantity-update-input js-quantity-update-input-${matchingProduct.Id}">
    <button class="save-input-quantity-button js-save-quantity"data-product-id="${matchingProduct.Id}"
    >
    Save</button>

  <button class="delete-button js-delete-button"
  data-product-id="${matchingProduct.Id}">
    Delete</button>
  </div>
  <p class=" quantity-update-caution quantity-update-caution-${matchingProduct.Id}">
   0 < quantity <=100
  </p>
</div>
    </div>

</div>

<div class="delivery-info">

<div class="choose-delivery-date-text">
    Choose delivery Date
</div>
${deliveryOptionsHTML(matchingProduct,cartItem)}

</div>
</div>
</div>
`
   
})
//passing matching product and cartItem as parameters cz they are not defined in the deliveryOptionsHTML function
function deliveryOptionsHTML(matchingProduct,cartItem){
 let html = ''

 /*Looping through the delivery options and creating html for each delivery option and substituting date of delivery and price */

    deliveryOptions.forEach((deliveryOption)=>{
         
      const dateString = calculateDeliveryDate(deliveryOption)  
      //use a ternary operator to check if price is 0 we display free
      const priceString = deliveryOption.price === 0 ?'FREE'
      :
      `$${deliveryOption.price} -`

/*using a ternary operator to make the variable true if both deliveryOptions are equal*/
      const isChecked = cartItem.deliveryOptionId === deliveryOption.id
       
      html +=`
        <div>
     <div  class="shipping-date-flex">
    <div class="radio-input-div js-delivery-option"
      data-product-id="${matchingProduct.Id}"
      data-delivery-option-id="${deliveryOption.id}">
        <input type="radio" 
        ${isChecked ?'checked':''}
        name ="name-${matchingProduct.Id}">
    </div>
    <div>
        <div class ="date js-delivery-option"
         data-product-id="${matchingProduct.Id}"
         data-delivery-option-id="${deliveryOption.id}">
         ${dateString}
        </div>
        <div class="shipping-cost js-delivery-option"
        data-product-id="${matchingProduct.Id}"
         data-delivery-option-id="${deliveryOption.id}">
        <div>${priceString}</div>
         <div>
         &#160 Shipping
         </div>
        </div>
    </div>
     </div>
     </div>

        `
    })

  return html
}


cart.length > 0 ?
document.querySelector('.js-products-side').innerHTML=cartItemsHTML
:''
deletingItem()


 function deletingItem(){
 document.querySelectorAll('.js-delete-button')
.forEach((button)=>{
button.addEventListener('click',()=>{
 const productId = button.dataset.productId
 removeFromCart(productId)
 renderPaymentSummary()
 renderOrderSummary()
 updatingItemQuantity()
 placingOrder()
//the code remove the product manually so its replaced by MVC above
// const container = document.querySelector(`.js-all-items-info-${productId}`)
// container.remove();
})

})

}


 document.querySelectorAll('.js-delivery-option')
 .forEach((element)=>{
    element.addEventListener('click',()=>{
//shorthand property
  const{productId,deliveryOptionId}= element.dataset;

 updateDeliveryOption(productId,deliveryOptionId)
renderOrderSummary();
updatingItemQuantity()
renderPaymentSummary()
 denyingCommas()
 placingOrder()

    })
 })

}

