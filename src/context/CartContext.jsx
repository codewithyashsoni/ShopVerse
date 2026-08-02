import { createContext, useState } from "react"

const CartContext = createContext();

function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product, quantity){
        const existingProduct = cartItems.find(
            (item) => item.id === product.id
        )
        if(!existingProduct){
            setCartItems(prevCart => [...prevCart, {id: product.id, quantity: quantity}])
        }else{
            setCartItems(prevCart => (
                prevCart.map((item) => {
                    if(item.id === product.id){
                        return {
                            ...item, 
                            quantity: item.quantity + quantity
                        }
                    }
                    return item;
                })
            ))
        }
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>

    )
}
export {CartProvider}

export default CartContext