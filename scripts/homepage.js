import { cart,addToCart } from "../data/cart.js"
import { products } from "../data/products.js"  



let productsHTML=''

products.forEach((product)=>{
 
 productsHTML+= `
<div class = "product-container">

    <div class="product-image-container">
    <img class="item" src=" ${product.image}">

    </div>
    <div class="product-name-container">
    ${product.name}
    </div>

    <div class ="product-specs">

    <div class = "storage-rom-container"> 
    <div class="rom-text-container">
    ROM :
    </div>
    <div class="rom-amount">
      ${product.specs.rom}GB
    </div>
    <div class ="rom-type">
     ${product.specs.romType}
    </div>
    </div>
    <div class = "storage-ram-container">
    <div class="ram-text-container">
     RAM :
    </div>
     <div class="ram-amount">
     ${product.specs.ram}GB
     </div>
    </div>
    <div class = "product-system-container">
    
     <div class="system-text-container">
     O.S:
     </div>
     <div class="product-operating-system">
      ${product.specs.Osystem}
     </div>
     </div>
     <div class ="product-system-container">
     <div class="system-text-container">
     Version:
     </div>
     <div class="product-operating-system">
      ${product.specs.version}
      </div>
      </div>
      <div class = "see-more-info js-more-info"data-product-info ="${product.specs.more}">

       See more... 
      </div>
    </div>
    <div class =  "product-price-container">
    <div class="product-price-text">
    Price :
    </div>
    <div class = "amount-container">
    R${(product.price).toFixed(2)}
    </div>
    </div>
     
    <div class="product-quantity-container">
        <select class="js-select-quantity-${product.Id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>
        <div class="added-text-container js-added-text-${product.Id}">
        Added&#10004</div>


    <div class="add-to-cart-container">
    <button class="add-to-cart-button" data-product-Id= "${product.Id}">
    Add to cart
    </button>
    </div>

</div>
 
`
})

document.querySelector('.js-product-container').innerHTML = productsHTML

showItemSpecs()

function updateCartQuantity(){

  let cartQuantity = 0

  cart.forEach((cartItem)=>{
      cartQuantity += cartItem.quantity
    
  })
  
  document.querySelector('.js-cart-quantity')
  .innerHTML = cartQuantity
    // console.log(cart)
    // console.log(cartQuantity)
  
}


 document.querySelectorAll('.add-to-cart-button')
 .forEach((button)=>{
  button.addEventListener('click',()=>{
 const productId = button.dataset.productId
 const selectElement = document.querySelectorAll(`.js-select-quantity-${productId}`)

 let quantity;
  
selectElement.forEach((select)=>{
  quantity = Number((select.value))
  displayAddedText(productId)

})
  addToCart(productId,quantity)
  updateCartQuantity()

  })
})

  

function displayAddedText(productId){

  const addedTextElement = document.querySelectorAll(`.js-added-text-${productId}`)

  addedTextElement.forEach((text)=>{
    
      text.classList.add('adding-product')
   
    setTimeout(()=>{
        text.classList.remove('adding-product')
       
      },1000)
    
    })
   
  }

  
 function showItemSpecs(){
  let intervalId;

  document.querySelectorAll('.js-more-info')
  .forEach((div)=>{
    
    div.addEventListener('click',()=>{
      if(div.innerText === 'See more...'){
         div.classList.add('displayed-info')
       div.innerHTML = `
       ${div.dataset.productInfo}
       <button class = "see-less-button">
       See less...
       </button>
       `
        intervalId=setTimeout(()=>{
         
        div.classList.remove('displayed-info')
          
        div .innerHTML='See more...'
        
       },6000)
    
      }else{
         clearInterval(intervalId)
      
         div.classList.remove('displayed-info')
          
         div .innerHTML='See more...'
  
      }
  
        })
       })
 }
 

     
     
      
        
    