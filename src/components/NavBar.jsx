import { Link } from "react-router-dom"
import { ShoppingBag, ShoppingCart } from "lucide-react"

function NavBar(){
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
                        <span className="cart-badge">1</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}
export default NavBar