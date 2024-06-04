export const cart = [{
    productId:'2c3a-6e9f-1g2h-5i',
    quantity:2,
},{
    productId:'3c4d-5e6f-6g7h-9i',
    quantity:1,

}]





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
  
  }