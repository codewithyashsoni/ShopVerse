import { useState, useContext } from "react"
import products from "../data/products.js"
import { useParams, useNavigate } from "react-router-dom"
import { Star, Circle, ShoppingCart } from "lucide-react"
import CartContext from "../context/CartContext.jsx"

function ProductDetails(){
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useContext(CartContext);

    const { id } = useParams();
    const product = products.find(product => product.id === Number(id));
    const {name, category, price, image, description, stock, rating} = product;
    const navigate = useNavigate();

    const updatedPrice=`₹${price.toLocaleString("en-IN")}`;

    function handleBackClick(){
        navigate(-1);
    }
    
    function handleQuantityIncrease(){
        setQuantity(q => q+1);
    }

    function handleQuantityDecrease(){
        if(quantity > 1){
            setQuantity(q => q-1);
        }
    }

    function handleAddToCart(){
        addToCart(product, quantity);
    }

    return(
        <div className="product-details-container">
            <button 
                className="detail-back-button" 
                onClick={handleBackClick}
                type="button"
            >⬅ Back to Products</button>

            <div className="product-details">
                <div className="detail-image-container">
                    <img src={image} className="detail-image" alt={`${name} image`} />
                </div>

                <div className="product-detail-info">
                    <h1 className="product-detail-name">{name}</h1>
                    <p className="product-detail-description">{description}</p>

                    <div className="rating-container">
                        <Star fill="currentColor" className="star-icon"/>
                        <span>{rating}</span>
                    </div>

                    <p className="product-detail-category">Category: {category}</p>

                    <div className={`stock ${stock>0 ? "in-stock" : "out-of-stock"}`}>
                        <span>Status: </span>
                        <Circle className="stock-icon" />
                        <span>{stock>0 ? "In Stock" : "Out of Stock"}</span>
                    </div>

                    <h2 className="product-detail-price">{updatedPrice}</h2>

                    <div className="product-detail-quantity-container">
                        <button 
                            onClick={handleQuantityDecrease}
                            className="product-detail-quantity-btn"
                            disabled={quantity <= 1}
                        >-</button>

                        <span className="product-detail-quantity">{quantity}</span>

                        <button 
                            onClick={handleQuantityIncrease}
                            className="product-detail-quantity-btn"
                        >+</button>

                    </div>

                    <button 
                        onClick={handleAddToCart} 
                        className="add-to-cart-btn"
                    >
                        <ShoppingCart className="btn-cart-icon" />
                        <span>Add to Cart</span>
                    </button>


                </div>
            </div>
        </div>
    )

}
export default ProductDetails