import { useState } from "react"
import products from "../data/products.js"
import SearchBar from "../components/SearchBar.jsx"
import CategoryFilter from "../components/CategoryFilter.jsx"

function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All")

    return(
        <div className="home-container">
            <div className="search-filter-container">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <CategoryFilter selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} />
            </div>
        </div>
    )
}
export default Home