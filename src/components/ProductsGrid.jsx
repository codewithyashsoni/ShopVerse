import ProductCard from "./ProductCard.jsx"

function ProductsGrid({filteredProducts}){
    return(
        <div className="products-grid-container">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
export default ProductsGrid