function CategoryFilter({selectedCategory, setSelectedCategory}){
    return(
        <div className="category-filter-container">
            <select 
                className="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Sports">Sports</option>

            </select>
        </div>
    )
}
export default CategoryFilter