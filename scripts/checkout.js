import { cart,removeFromCart,updateQuantity,updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
let cartItemsHTML='';

import { deliveryOptions } from "../data/deliveyOptions.js";

cart.forEach((cartItem)=>{
const productId = cartItem.productId
console.log(productId)
let matchingProduct;

products.forEach((product)=>{
    if(product.Id === productId){
  matchingProduct = product
    }
    
})

const deliveryOptionId = cartItem.deliveryOptionId
let deliveryOption;
deliveryOptions.forEach((option)=>{

    if( option.id ===deliveryOptionId){
        deliveryOption = option;
    }
});
//this code takes the delivery option we selected and calculate it so that we can use it down in our code
const today = dayjs();
const deliveryDate =  today.add(deliveryOption.deliveryDays,'days')

const dateString = deliveryDate.format('dddd, MMMM D')  

 
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
    R${(matchingProduct.price).toFixed(2)}
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
        const today = dayjs();
        const deliveryDate =  today.add(deliveryOption.deliveryDays,'days')

      const dateString = deliveryDate.format('dddd, MMMM D')  
      //use a ternary operator to check if price is 0 we display free
      const priceString = deliveryOption.price === 0 ?'FREE'
      :
      `R${deliveryOption.price} -`

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



document.querySelector('.js-products-side').innerHTML=cartItemsHTML


deletingItem()
updatingItemQuantity()

function deletingItem(){
 document.querySelectorAll('.js-delete-button')
.forEach((button)=>{
button.addEventListener('click',()=>{
 const productId = button.dataset.productId
 removeFromCart(productId)


 const container = document.querySelector(`.js-all-items-info-${productId}`)
     
 container.remove();
})

})
}


function updatingItemQuantity(){
document.querySelectorAll('.js-update-button')
.forEach((button)=>{
    button.addEventListener('click',()=>{
const productId = button.dataset.productId
const itemContainer =document.querySelector(`.js-all-items-info-${productId}`)

itemContainer.classList.add('is-editing-quantity')


    })
})



 
document.querySelectorAll('.js-save-quantity')
.forEach((button)=>{
   
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId
        const itemContainer =document.querySelector(`.js-all-items-info-${productId}`)
        const inputElement=document.querySelector(`.js-quantity-update-input-${productId}`)
       
        saveNewQuantity()

        function saveNewQuantity(){
            const updatedQuantity= Number(inputElement.value)

            if(updatedQuantity >= 1 && updatedQuantity <=100){
     
    
    
                const quantityLabel = document.querySelector(`.js-item-quantity-${productId}`)
    
                quantityLabel.innerHTML=updatedQuantity
        
                updateQuantity(productId,updatedQuantity)
    
                inputElement.value = ''
                itemContainer.classList.remove('is-editing-quantity')
                
            }else{
    
                 document.querySelector(`.quantity-update-caution-${productId}`).innerHTML ='Please provide correct quantity!'
                setTimeout(()=>{
    
                    document.querySelector(`.quantity-update-caution-${productId}`).innerHTML =' 0 < quantity <=100'
                },3000)
             
            }
    

        }
       

       
    inputElement.addEventListener('keydown',()=>{
        if(event.key==='Enter'){
            saveNewQuantity()
        }
    })

    })

})
}

 document.querySelectorAll('.js-delivery-option')
 .forEach((element)=>{
    element.addEventListener('click',()=>{
//shorthand property
  const{productId,deliveryOptionId}= element.dataset;

 updateDeliveryOption(productId,deliveryOptionId)

    })
 })