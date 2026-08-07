import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import CartContext from "../context/CartContext.jsx"
import CartItem from "../components/CartItem.jsx"
import OrderSummary from "../components/OrderSummary.jsx"
import EmptyCart from "../components/EmptyCart.jsx"

function Cart(){
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    function handleContinueShopping(){
        navigate("/");
    }

    return(
        <div className="cart-container">
            <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
            >⬅ Continue Shopping</button>

            <div className="cart">
                {cartItems.length === 0 ?
                    (<EmptyCart />)
                    :
                    (   <>
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

                        <div className="checkout-btn-container">
                            <Link to="/checkout">
                                <button className="checkout-btn">Proceed to Checkout</button>
                            </Link>
                        </div>
                        </>
                    )
                }
            </div>
        </div>
    )

}
export default Cart