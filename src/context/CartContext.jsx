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

    function updateQuantity(id, newQuantity){
        if(newQuantity < 1){
            return;
        }

        setCartItems((prevCart) => (
            prevCart.map((item) => {
                if(item.id === id){
                    return{
                        ...item,
                        quantity: newQuantity
                    };
                }
                return item;
            })
        ))
    }

    function removeFromCart(id){
        setCartItems((prevCart) => (
            prevCart.filter((item) => item.id !== id)
        ))
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, updateQuantity, removeFromCart}}>
            {children}
        </CartContext.Provider>

    )
}
export {CartProvider}

export default CartContext