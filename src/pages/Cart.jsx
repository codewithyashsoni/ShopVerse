import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CartContext from "../context/CartContext.jsx"
import CartItem from "../components/CartItem.jsx"
import OrderSummary from "../components/OrderSummary.jsx"

function Cart(){
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);

    function handleContinueShopping(){
        navigate(-1);
    }

    return(
        <div className="cart-container">
            <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
            >⬅ Continue Shopping</button>

            <div className="cart">
                <h1>Shopping Cart</h1>
                <div className="cart-items">
                    {cartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        />
                    ))}
                </div>

                <OrderSummary />
            </div>
        </div>
    )

}
export default Cart