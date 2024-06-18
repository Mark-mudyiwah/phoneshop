import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

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

    <div>Items(2):</div>
    <div class="item-summary-price">
        ${productsCost}
    </div>
</div>
<div>

    <div>
        Shipping&Handling:</div>
    <div class="shipping-handling-cost">
        ${shippingCost}
    </div>
</div>

<div>
    <div class="total-before-tax-text">
        Total before tax:</div>
   <div class="amount-before-tax">
    ${costBeforeTax}
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
        ${totalCost}
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
