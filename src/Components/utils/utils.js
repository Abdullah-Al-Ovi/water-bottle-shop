 const getFromLocalStorage=()=>{
     let cart = []
     const storedJsn = localStorage.getItem('cart');
     if(storedJsn){
        cart = JSON.parse(storedJsn)
     }
     return cart
     
     
    
}
const setToLocalStorage=(cart)=>{
    const cartStr = JSON.stringify(cart);
    localStorage.setItem('cart',cartStr)
}

const removeFromLocalStorage=(bottleInfo)=>{
    const cart = getFromLocalStorage();
    const index = cart.findIndex(item=>item.id===bottleInfo.id)
    console.log(cart);
    console.log(index)
    if(index !== -1){
        cart.splice(index,1)
    }
    // console.log(cart);
    return cart;
}
const addToLocalStorage=(bottle)=>{
    const cart = getFromLocalStorage()
    cart.push(bottle);
    setToLocalStorage(cart)
}

export { addToLocalStorage,getFromLocalStorage,removeFromLocalStorage,setToLocalStorage};