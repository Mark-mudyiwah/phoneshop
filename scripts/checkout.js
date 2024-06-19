import { renderOrderSummary } from "./checkout/orderSummary.js"
import { updateQuantity } from "../data/cart.js"
import { renderPaymentSummary } from "./checkout/paymentSummary.js"






 renderOrderSummary()
  renderPaymentSummary()

updatingItemQuantity()
 
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
    
                 document.querySelector(`.quantity-update-caution-${productId}`).innerHTML ='Please provide correct quantity!'
                setTimeout(()=>{
    
                    document.querySelector(`.quantity-update-caution-${productId}`).innerHTML =' 0 < quantity <=100'
                },3000)
             
            }
    

        }
       

       
    inputElement.addEventListener('keydown',()=>{
        if(event.key==='Enter'){
            saveNewQuantity()
            renderPaymentSummary()
        }
    })

    })

})
}
