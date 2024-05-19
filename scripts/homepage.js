const products =[
  {
    image:'images/products/Laptops&monitors/Apple MacBook.webp',
    name:' Apple MacBook',
    price: 22000

  },
  {
    image: 'images/products/Laptops&monitors/Dell Laptop.webp',
    name: 'Dell Laptop',
    price: 11000

  },

  {
    image: 'images/products/Laptops&monitors/Asus Laptop.webp',
    name:  'Asus VivoBook',
    price: 8999.9

  },

]
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
      ${256}GB
    </div>
    </div>
    <div class = "storage-ram-container">
    <div class="ram-text-container">
     RAM :
    </div>
     <div class="ram-amount">
     25GB
     </div>
    </div>
    <div class = "product-color-container">
    
     <div class="color-text-container">
     Color :
     </div>
     <div class="product-color">
      ${'Blue'}
     </div>
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
    <div class="added-text-div">
 
    </div>
    <div class="add-to-cart-container">
    <button class="add-to-cart-button">
    Add to cart
    </button>
    </div>

</div>

`
 
})

document.querySelector('.js-product-container').innerHTML = productsHTML
 
