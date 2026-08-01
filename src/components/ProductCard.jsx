import { Link } from "react-router-dom";

function ProductCard({product}){
    const {id, name, category, price, image} = product;

    const updatedPrice = `₹${price.toLocaleString("en-IN")}`

    return(
        <Link to={`/product/${id}`} className="product-card-link" >
            <div className="product-card">
                <div className="product-image-container">
                    <img src={image} alt={`${name} image`} className="product-card-image" />
                </div>
                
                <div className="product-card-info">
                    <h3 className="product-card-name">{name}</h3>
                    <p className="product-card-category">{category}</p>
                    <h2 className="product-card-price">{updatedPrice}</h2>
                </div>
                
            </div>
        </Link>
        
    )
}
export default ProductCard