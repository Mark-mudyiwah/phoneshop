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


dropDownAnimation()
showItemSpecs()
updateCartQuantity()



 export function updateCartQuantity(){

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
 

  //MENU DROPDOWN
  
function dropDownAnimation(){

  const menuDropDown = document.querySelector('.js-anchor-menu')
 
    menuDropDown.addEventListener('click',()=>{

      document.querySelector('.message-us-drop-down')
        .innerHTML=''
        document.querySelector('.message-us-drop-down').classList.remove('message-us-drop-down-animate')


      document.querySelector('.categories-drop-down')
      .innerHTML='';

      document.querySelector('.categories-drop-down').classList.remove('categories-drop-down-animate')

      document.querySelector('.about-us-drop-down').classList.remove('about-us-drop-down-animate')



    const dropDownMenu = document.querySelector('.drop-down-menu')
    if(dropDownMenu.innerText=== ''){

    dropDownMenu.classList.add('menu-drop-down-animate')

      menuDropDown.innerHTML =
      `
    <div class="icon-container"> 
    <img class="header-icon" src="images/header images/close-icon.png">
    </div>
    <div>Close</div>
     
      `
      dropDownMenu.innerHTML= `
      <div class="Sign In">Sign In</div>
      <div class="categories"> Categories</div>
     <div class="about-us">About Us </div>
     
  
      
      `
    }else{
      
      dropDownMenu.classList.add('menu-drop-down-animate-close')
      setTimeout(()=>{
        dropDownMenu.innerHTML='';
        dropDownMenu.classList.remove('menu-drop-down-animate')
        dropDownMenu.classList.remove('menu-drop-down-animate-close')
      },500)
      

      document.querySelector('.about-us-drop-down')
      .innerHTML=''
      menuDropDown.innerHTML =
      `
    <div class="icon-container"> 
    <img class="header-icon" src="images/header images/menu-icon.png">
    </div>
    <div>More</div>
    `
    dropDownMenu.classList.remove('menu-drop-down-animate')
     
     return
    }


      
      const categoriesElement = document.querySelector('.categories')  
        
      categoriesElement.addEventListener('click',()=>{

        document.querySelector('.about-us-drop-down')
        .innerHTML=''
        document.querySelector('.about-us-drop-down').classList.remove('about-us-drop-down-animate')
        document.querySelector('.message-us-drop-down')
        .innerHTML=''

        const categoryDropDown =document.querySelector('.categories-drop-down')
        if(categoryDropDown.innerText === ''){
         categoryDropDown.classList.add('categories-drop-down-animate')
          categoryDropDown.innerHTML=
          `
          <div class="laptops">Laptops</div>
          <div class="mobiles"> Mobiles</div>
          <div class="other">Other</div>
          <div></div>
          
          `

        }else{
          categoryDropDown.classList.remove('categories-drop-down-animate')
          categoryDropDown.innerHTML=''
          return
        }

      
        

      })

      const  aboutUsElement = document.querySelector('.about-us')

      aboutUsElement.addEventListener('click',()=>{
        document.querySelector('.categories-drop-down')
        .innerHTML =''
        document.querySelector('.categories-drop-down').classList.remove('categories-drop-down-animate')

        document.querySelector('.message-us-drop-down').classList.remove('message-us-drop-down-animate')

        const aboutUsDropDown =document.querySelector('.about-us-drop-down')
       aboutUsDropDown.classList.add('about-us-drop-down-animate')
       
        if(aboutUsDropDown.innerText === ''){
        
          aboutUsDropDown.classList.add('about-us-drop-down-animate')
        aboutUsDropDown.innerHTML =
        `
        
      <div class="contact-us">Message Us</div>
      <div class="address"> Address</div>
      <div class="services">Services</div>
        `
       }else{
        aboutUsDropDown.classList.add('about-us-drop-down-animate-close')
        
        document.querySelector('.message-us-drop-down').innerHTML=''
        setTimeout(()=>{
          aboutUsDropDown.innerHTML =''
          aboutUsDropDown.classList.remove('about-us-drop-down-animate')
          aboutUsDropDown.classList.remove('about-us-drop-down-animate-close')
        },500)
         
       return
       }
        
        
        const messageUsElement = document.querySelector('.contact-us')

        messageUsElement.addEventListener('click',()=>{
          const messageUsDropDown =document.querySelector('.message-us-drop-down')
          if(messageUsDropDown.innerText===''){

            messageUsDropDown.classList.add('message-us-drop-down-animate')

            messageUsDropDown.innerHTML=
            ` 
            <a href="https://wa.me/message/CTCLVZLPBW5JK1">
            <div class="watsapp">
            <img class="whatsapp-icon" src="images/other images/whatsapp-icon.png">
            Whatsapp</div>
            <a/>
            <a href = "https://m.me/mark.mudyiwa.2004yew">
            <div class="facebook"> 
            <img class="facebook-icon" src="images/other images/facebook-icon.png">
            Facebook</div>
            </a>

            <a href = "mailto:markmudyiwah0@gmail.com">
            <div class="email">
            <img class="gmail-icon" src="images/other images/gmail-icon.png">
            Email</div>
            </a>
            `
    
          }else{
            messageUsDropDown.classList.remove('message-us-drop-down-animate')
            messageUsDropDown.innerHTML= ''
          }
        
        
        })
      })


    })
     
  }