import { useState, useEffect } from "react"
import products from "../data/products.js"
import SearchBar from "../components/SearchBar.jsx"
import CategoryFilter from "../components/CategoryFilter.jsx"
import ProductsGrid from "../components/ProductsGrid.jsx"

function Home(){
    const [searchTerm, setSearchTerm] = useState(() => {
        const searchedTerm = sessionStorage.getItem("searched-term");
        if(searchedTerm){
            return JSON.parse(searchedTerm);
        }
        return ""
    });
    const [selectedCategory, setSelectedCategory] = useState(() => {
        const storedCategory = sessionStorage.getItem("selected-category");
        if(storedCategory){
            return JSON.parse(storedCategory)
        }
        return "All"
    });

    useEffect(() => {
        sessionStorage.setItem("searched-term", JSON.stringify(searchTerm))
    }, [searchTerm])

    useEffect(() => {
        sessionStorage.setItem("selected-category", JSON.stringify(selectedCategory))
    }, [selectedCategory])

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