import { cart,removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";

let cartItemsHTML='';

cart.forEach((cartItem)=>{
const productId = cartItem.productId
let matchingProduct;

products.forEach((product)=>{
    if(product.Id === productId){
  matchingProduct = product
    }
})
 
cartItemsHTML+=`<div class="all-item-info-div 
js-all-items-info-${matchingProduct.Id}">

<div class="item-delivery-date">
<div class="delivered-text">
    Delivered : 
</div>
<div class="actual-delivery-date">
    Sunday,June 11 
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
    R${(matchingProduct.price).toFixed(2)}
</div>

<div class="quantity-info">

<div class="quantity-text">
    <div>Quantity:</div>
</div>
<div class="item-quantity">
    ${cartItem.quantity}
</div>
  </div>
  <button class="update-button js-delete-button">
    Update</button>
  <button class="delete-button js-delete-button"
  data-product-id="${matchingProduct.Id}">
    Delete</button>
  
</div>
    </div>

</div>

<div class="delivery-info">

<div class="choose-delivery-date-text">
    Choose delivery Date
</div>

<div>
     <div  class="shipping-date-flex">
    <div class="radio-input-div">
        <input type="radio" name ="name-${matchingProduct.Id}" 
       >
    </div>
    <div>
        <div class ="date">
            Monday, May 31
        </div>
        <div class="shipping-cost">
        <div>R200</div> <div>-Shipping</div>
        </div>
    </div>
    
</div>

<div  class="shipping-date-flex">
    <div>
        <input type="radio" name =
        "name-${matchingProduct.Id}"
       >
    </div>
    <div>
        <div class ="date">
            Sunday,June 11
        </div>
        <div class="shipping-cost">
            <div>R80 </div> <div>-Shipping</div>
        </div>
    </div>
    
</div>
 
<div  class="shipping-date-flex">
    <div>
        <input type="radio" name = "name-${matchingProduct.Id}"
       >
    </div>
    <div>
        <div class ="date">
            Wednesday, June 23
        </div>
        <div class="shipping-cost">
            <div>Free</div> <div>-Shipping</div>
        </div>
    </div>
    
</div>
</div>

</div>
</div>
</div>
`
   
})

document.querySelector('.js-products-side').innerHTML=cartItemsHTML

document.querySelectorAll('.js-delete-button')
.forEach((button)=>{
button.addEventListener('click',()=>{
 const productId = button.dataset.productId
 removeFromCart(productId)


 const container = document.querySelector(`.js-all-items-info-${productId}`)
  
 container.remove();
})

})

 