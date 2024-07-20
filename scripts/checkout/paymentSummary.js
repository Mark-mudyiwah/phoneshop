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


if (cart.length > 0){
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
       $ &#160 ${productsCost.toFixed(2)}
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
    $ &#160 ${costBeforeTax.toFixed(2)}
   </div>
</div>
<div>
    <div class="estimated-tax-text">
        Estimated tax(5%):</div>
    <div class="estimated-tax-amount">
     ${tax.toFixed(2)}
    </div>

</div>
<div class = "order-cost-flex">
<div class="order-total-text">
   Order Total:</div>
    <div class="actual-total-amount">
         $ &#160 ${totalCost.toFixed(2)}
    </div>
</div>

 </div>
 <div class="place-order-div">
    <button class="place-order-button js-place-order">
    Place an Order</button>
    </div>
`

document.querySelector('.js-summary-side')
.innerHTML = paymentSummaryHTML
return paymentSummaryHTML;
} else {
    document.body
    .innerHTML = `<div class ="empty-cart">
    <div>
    You don't have any products in the cart
    <div>
    </div>

    <div class="view-products-container">
    <a href = "index.html">
    <button>View Products</button>
    </a>
    </div>
    
    `

}
}
