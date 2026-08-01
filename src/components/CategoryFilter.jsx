import products from "../data/products.js"

function CategoryFilter({selectedCategory, setSelectedCategory}){
    const categories = [
        "All",
        ...new Set(products.map(product => product.category))
    ];

    return(
        <div className="category-filter-container">
            <select 
                className="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >   
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}
export default CategoryFilter