export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
cart =
[{
    productId:'2c3a-6e9f-1g2h-5i',
    quantity:2,
},{
    productId:'3c4d-5e6f-6g7h-9i',
    quantity:1,

}]

}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}




export function addToCart(productId,quantity){

    let matchingItem;
  
    cart.forEach((cartItem)=>{ 
         
     if(productId === cartItem.productId){
      matchingItem = cartItem
     }
    })
    
    if(matchingItem){
      matchingItem.quantity+= quantity
    }else{
      cart.push(
        {
          productId:productId,
          quantity: quantity
        }
      )
    }
  saveToStorage();
  }

 export function removeFromCart(productId){

    const newCart = []
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })
    cart = newCart
    saveToStorage();
  }

 export function updateQuantity(productId,updatedQuantity){
  let matchingItem; 

  cart.forEach((cartItem)=>{
  if(cartItem.productId ===productId
  ){
    matchingItem = cartItem
  }
})
matchingItem.quantity=updatedQuantity
saveToStorage();
  }