import { PackageCheck } from "lucide-react"
import { Link } from "react-router-dom"

function OrderSuccess(){
    return(
        <div className="success-container">
            <PackageCheck className="success-icon" />

            <h1>Order Placed Successfully!</h1>
            <p>Thank you for shopping with <span>ShopVerse</span>.</p>
            <p>Your order has been confirmed and is being processed.</p>
            <Link to="/">
                <button className="success-btn">Continue Shopping</button>
            </Link>
        </div>
    )
    
}
export default OrderSuccess