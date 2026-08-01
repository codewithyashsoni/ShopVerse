import { useState } from "react"
import products from "../data/products.js"
import SearchBar from "../components/SearchBar.jsx"
import CategoryFilter from "../components/CategoryFilter.jsx"
import ProductsGrid from "../components/ProductsGrid.jsx"

function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    function categoryFilterProducts(productsArr, categoryFilter){
        if(categoryFilter === "All"){
            return productsArr
        }
        
        return productsArr.filter((product) => product.category === categoryFilter)
    }
    
    const categoryFilteredProducts = categoryFilterProducts(products, selectedCategory);

    function searchFilterProducts(productsArr, searchFilter){
        const trimmedTerm = searchFilter.trim().toLowerCase();
        if(!trimmedTerm){
            return productsArr
        }
        
        return productsArr.filter((product) => product.name.toLowerCase().includes(trimmedTerm));
    }

    const filteredProducts = searchFilterProducts(categoryFilteredProducts, searchTerm);

    return(
        <div className="home-container">
            <div className="search-filter-container">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <CategoryFilter selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} />
            </div>
            <ProductsGrid filteredProducts={filteredProducts} />
        </div>
    )
}
export default Home