import { Search } from "lucide-react"

function SearchBar({searchTerm, setSearchTerm}){

    return(
        <div className="search-bar-container">
                <Search className="search-icon" />

                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                    placeholder="Seach products..."
                />
        </div>
    )
}
export default SearchBar