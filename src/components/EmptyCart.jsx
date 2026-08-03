import { ShoppingCart } from "lucide-react"

function EmptyCart(){
    return(
        <div className="empty-cart-container">
            <ShoppingCart className="empty-cart-icon" />
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any products to your cart yet.</p>
        </div>
    )
}
export default EmptyCart