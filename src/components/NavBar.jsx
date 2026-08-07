import { Link } from "react-router-dom"
import { ShoppingBag, ShoppingCart } from "lucide-react"
import { useContext } from "react"
import CartContext from "../context/CartContext.jsx"

function NavBar(){
    const {cartItems} = useContext(CartContext);

    let totalItems = cartItems.reduce((accumulator, currentEl) => {
        return accumulator + currentEl.quantity
    }, 0)

    return(
        <div className="navbar-container">
            <nav className="navbar">
                <Link to="/" >
                    <div className="app-logo">
                        <ShoppingBag className="shopping-bag-icon" />
                        <h1>ShopVerse</h1>
                    </div>
                </Link>

                <Link to="/cart" >
                    <div className="cart-icon">
                        <ShoppingCart className="shopping-cart-icon" />
                        <span className="cart-badge">{totalItems}</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}
export default NavBar