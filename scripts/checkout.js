import { renderOrderSummary } from "./checkout/orderSummary.js"
import { cart, updateQuantity } from "../data/cart.js"
import { renderPaymentSummary } from "./checkout/paymentSummary.js"
import { loadFromStorage } from "../data/orders.js"
import { getDeliveryOption } from "../data/deliveryOptions.js"
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { getProduct } from "../data/products.js"
//import '../data/cart-class.js';
//import '../data/backend-practise.js';



  renderOrderSummary()
  renderPaymentSummary()
  denyingCommas()
 updatingItemQuantity()

 

/* export function adjustHeight(textarea) {
    textarea.style.height = 'auto'; // Reset height to auto
    textarea.style.height = textarea.scrollHeight + 'px'; // Set height to scrollHeight
}*/
 
 export function updatingItemQuantity(){
   
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
    
           
                    renderPaymentSummary()
        
                    inputElement.value = ''
                    itemContainer.classList.remove('is-editing-quantity')
                    
                }else{
                     inputElement.value = ''
                     document.querySelector(`.quantity-update-caution-${productId}`).innerHTML ='Please provide correct quantity!'
                    setTimeout(()=>{
        
                        document.querySelector(`.quantity-update-caution-${productId}`).innerHTML =' 0 < quantity <=100'
                    },3000)
                 
                }

                placingOrder()
               AddClientDetails()
            }
           
        })
    
    })
    
    };
//blocking input from accepting commas


export function denyingCommas(){
document.querySelectorAll('.quantity-update-input')
    .forEach((input)=>{
        input.addEventListener('input',()=>{
            input.value=input.value.replace(/[,.]/g,"")
        })
    })
}


 export function placingOrder(){
    cart.length > 0 ?
document.querySelector('.js-place-order').addEventListener('click',()=>{
    const customerNameInputElement = document.querySelector('.js-customer-name')
    const customerNumberInputElement = document.querySelector('.js-customer-number')
    const customerAddressElement = document.querySelector('.js-customer-address')
    const customerCommentElement = document.querySelector('.js-customer-comment')

    const customerName = (customerNameInputElement.value) 
    const customerNumber = (customerNumberInputElement.value) 
    const customerAddress = customerAddressElement.value
    const customerComment = customerCommentElement.value

    let productsCost = 0
    let shippingCost = 0
    let orders =loadFromStorage()
    const today = dayjs()
    const orderDate = today.format('MMMM D')

const idNumber = Math.random() 
const orderId = (idNumber*100000).toFixed(0).padEnd(5,'0')



cart.forEach((cartItem)=>{

  
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
    const deliveryDate = (today.add(`${deliveryOption.deliveryDays}`,'days')).format('ddd D MMMM YYYY')

    const product = getProduct(cartItem.productId);
    productsCost += product.price*cartItem.quantity;
   shippingCost += deliveryOption.price
    cartItem.deliveryDate = `${deliveryDate}`
    cartItem.orderDate =`${orderDate}`
    cartItem.orderId =`${orderId}`
   
})

const costBeforeTax =productsCost + shippingCost
const tax =  costBeforeTax * 0.05

const totalCost =  costBeforeTax+tax

console.log(cart)
cart.forEach((cartItem)=>{
   cartItem.totalCost = `${totalCost}`
})

orders.unshift(cart)

 localStorage.removeItem('cart')
 
localStorage.setItem('orders',JSON.stringify(orders))

window.location.href ='orders.html'

})


:''

}

placingOrder()

export function AddClientDetails(){
    cart.length > 0 ?
    document.querySelector('.js-next-button').addEventListener('click',()=>{
      document.querySelector('.js-next-button').classList.add('hide')
    document.querySelector('.js-client-details').classList.add('show')
    document.querySelector('.place-order-div').classList.add('remove-flex')
    

    }):''
}

AddClientDetails()
