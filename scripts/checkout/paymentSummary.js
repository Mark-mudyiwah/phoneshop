import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

 


function cartItemsCount(){
 let cartQuantity = 0
cart.forEach((cartItem)=>{
 cartQuantity += cartItem.quantity 

})
return cartQuantity
}







export function renderPaymentSummary(){
    

 let productsCost = 0
 let shippingCost = 0



 cart.forEach((cartItem) => {
const product = getProduct(cartItem.productId);
 productsCost += product.price*cartItem.quantity;
const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
 shippingCost += deliveryOption.price

});
    
 const costBeforeTax =productsCost + shippingCost
 const tax =  costBeforeTax * 0.05
const totalCost =  costBeforeTax+tax

const paymentSummaryHTML=
`
   <div class="summary-side">

        <div class="order-summary-heading">Order Summary</div>

     <div>

    <div>Items(${cartItemsCount()}):</div>
    <div class="item-summary-price">
       R &#160 ${productsCost.toFixed(2)}
    </div>
</div>
<div>

    <div>
        Shipping&Handling:</div>
    <div class="shipping-handling-cost">
       ${shippingCost.toFixed(2)}
    </div>
</div>

<div>
    <div class="total-before-tax-text">
        Total before tax:</div>
   <div class="amount-before-tax">
    R &#160 ${costBeforeTax.toFixed(2)}
   </div>
</div>
<div>
    <div class="estimated-tax-text">
        Estimated tax(5%):</div>
    <div class="estimated-tax-amount">
     ${tax.toFixed(2)}
    </div>

</div>
<div>
<div class="order-total-text">
   Order Total:</div>
    <div class="actual-total-amount">
        R &#160 ${totalCost.toFixed(2)}
    </div>
</div>

 </div>
 <div class="place-order-div">
    <button class="place-order-button">
        Confirm</button>
    </div>
`

document.querySelector('.js-summary-side')
.innerHTML = paymentSummaryHTML
return paymentSummaryHTML;
}
