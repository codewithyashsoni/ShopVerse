import { useState } from "react"
import SearchBar from "../components/SearchBar.jsx"

function Home(){
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <div className="home-container">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
    )
}
export default Home