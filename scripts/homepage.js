/*const products =[
  {
    image:'images/products/Laptops&monitors/Apple MacBook.webp',
    name:' Apple MacBook',
    price: 22000,
    specs:{

      rom: 256,
      ram: 24,
       Osystem:' MacOS',
      romType:'(SSD)'
    }


  },
  {
    image: 'images/products/Laptops&monitors/Dell Laptop.webp',
    name: 'Dell Laptop',
    price: 11000,
    specs:{
      rom:512,
      ram: 16,
      Osystem:' Windows11',
      romType:'(SSD)'

    }

  },

  {
    image: 'images/products/Laptops&monitors/Asus Laptop.webp',
    name:  'Asus VivoBook',
    price: 8999.9,
    specs:{
      rom: 256,
      ram:  12,
      Osystem:'Windows 10',
      romType:''

    }



  },

]
*/
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
     Operating System:
     </div>
     <div class="product-operating-system">
      ${product.specs.Osystem}
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
 
