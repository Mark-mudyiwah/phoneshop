
function Cart(localStorageKey){

  const cart = {
    cartItems: undefined,
    
    
     loadFromStorage(){
    this.cartItems  = JSON.parse(localStorage.getItem(localStorageKey));
    if(!this.cartItems){
        this.cartItems =
        [{
            productId:'2c3a-6e9f-1g2h-5i',
            quantity:2,
            deliveryOptionId:'1'
        },{
            productId:'3c4d-5e6f-6g7h-9i',
            quantity:1,
            deliveryOptionId:'2'
    }]
    
    } 
    },
    
    
     saveToStorage(){
        localStorage.setItem(localStorageKey,JSON.stringify(cart.cartItems));
    },
    
     addToCart(productId,quantity){
    
        let matchingItem;
      
        this.cartItems.forEach((cartItem)=>{ 
             
         if(productId === cartItem.productId){
          matchingItem = cartItem
         }
        })
        
        if(matchingItem){
          matchingItem.quantity+= quantity
        }else{
          this.cartItems.push(
            {
              productId:productId,
              quantity: quantity,
              deliveryOptionId:'1'
            }
          )
        }
      this.saveToStorage();
      },
    
      
     removeFromCart(productId){
    
        const newCart = []
        this.cartItems.forEach((cartItem)=>{
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        })
        this.cartItems = newCart
        this.saveToStorage();
      },
    
      
      updateQuantity(productId,updatedQuantity){
        let matchingItem; 
      
        this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId ===productId
        ){
          matchingItem = cartItem
        }
      })
      matchingItem.quantity = updatedQuantity
      this.saveToStorage();
        },
    
        
      updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;
      
        this.cartItems.forEach((cartItem)=>{ 
             
         if(productId === cartItem.productId){
          matchingItem = cartItem
         }
        })
    
        matchingItem.deliveryOptionId = deliveryOptionId
        this.saveToStorage()
    
      }
      
    };
    
return cart;
}

const cart = Cart('cart-oop')

const bussinessCart = Cart('cart-business')

cart.loadFromStorage()

bussinessCart.loadFromStorage()
 
console.log(cart)
console.log(bussinessCart)