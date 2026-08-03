import {useContext} from "react"
import CartContext from "../context/CartContext"
import products from "../data/products.js"

function OrderSummary(){
    const { cartItems } = useContext(CartContext);
    const total = cartItems.reduce((acc, cartItem) => {
        const product = products.find((product) => product.id === cartItem.id);
        return acc + product.price * cartItem.quantity;
    }, 0);
    const formattedTotal = `₹${total.toLocaleString("en-IN")}`

    return(
        <div className="order-summary-container">
            <h2>Order Summary</h2>
            <p>Items: <span>{cartItems.length}</span></p>
            <p>Total: <span>{formattedTotal}</span></p>
        </div>
    )
}
export default OrderSummary