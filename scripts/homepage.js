
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
    <div class="added-text-div" >
    </div>
    <div class="add-to-cart-container">
    <button class="add-to-cart-button" data-product-Id= "${product.Id}">
    Add to cart
    </button>
    </div>

</div>
 
`
})

document.querySelector('.js-product-container').innerHTML = productsHTML

 const addToCart = document.querySelectorAll('.add-to-cart-button')

 
   

 addToCart.forEach((button)=>{
  button.addEventListener('click',()=>{
 const productId = button.dataset.productId

 let matchingItem;

cart.forEach((item)=>{ 
 if(productId === item.productId){
  matchingItem = item
 }
})

if(matchingItem){
  matchingItem.quantity++
}else{
  cart.push(
    {
      productId:productId,
      quantity:1
    }
  )
}
   console.log(cart)
  })
})

  
  

 


 



 const divElement = document.querySelectorAll('.js-more-info')
 let intervalId;
 

 

divElement.forEach((div)=>{
  
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

      
        
    