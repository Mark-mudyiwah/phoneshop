const products =[
  {
    image:'images/img/Apple MacBook.webp',
    name:' Apple MacBook',
    price: 22000

  },
  {
    image: 'images/img/Dell Laptop.webp',
    name: 'Dell Laptop',
    price: 11000

  },

  {
    image: 'images/img/Asus Laptop.webp',
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
    <div class =  "product-price-container">
     R ${(product.price).toFixed(2)}
    </div>
    <div class="added-text-div">
    added
    <img class="added-tick-icon " src="images/img/icons8-tick-50.png">
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
 
