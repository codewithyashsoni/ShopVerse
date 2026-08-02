import products from "../data/products.js"
import { Trash2 } from "lucide-react"
import CartContext from "../context/CartContext.jsx"
import { useContext } from "react";

function CartItem({cartItem}){
    const product = products.find((product) => product.id === cartItem.id);
    const quantity = cartItem.quantity;

    if(!product) return null;

    const { id, name, category, price, image} = product;
    const updatedPrice = `₹${price.toLocaleString("en-IN")}`;

    const subTotal = price * quantity;
    const formattedSubTotal = `₹${subTotal.toLocaleString("en-IN")}`;

    const { updateQuantity, removeFromCart } = useContext(CartContext);

    function handleIncrease(){
        updateQuantity(id, quantity+1)
    }
    function handleDecrease(){
        updateQuantity(id, quantity-1)
    }
    function handleRemoveFromCart(){
        removeFromCart(id);
    }

    return(
        <div className="cart-item-container">
            <div className="cart-item-info">
                <div className="cart-image-container">
                    <img src={image} alt={`${name} image`} className="cart-image"/>
                </div>

                <div className="cart-item-details">
                    <h3>{name}</h3>
                    <p>{category}</p>
                    <h2>{updatedPrice}</h2>
                </div>
            </div>

            <div className="cart-item-controls">
                <div className="cart-quantity-controls">
                    <button 
                        className="cart-quantity-btn"
                        onClick={handleDecrease}
                        disabled={quantity <= 1}
                    >-</button>

                    <span className="cart-item-quantity">{quantity}</span>

                    <button 
                        className="cart-quantity-btn"
                        onClick={handleIncrease}    
                    >+</button>
                </div>

                <h2>Subtotal: {formattedSubTotal}</h2>

                <button 
                    className="cart-remove-btn" 
                    onClick={handleRemoveFromCart}
                >
                    <Trash2 className="cart-remove-icon" />
                    <span>Remove</span>
                </button>
            </div>
        </div>
    )
}
export default CartItem