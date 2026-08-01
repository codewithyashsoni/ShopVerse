import products from "../data/products.js"
import { useParams } from "react-router-dom"

function ProductDetails(){
    const { id } = useParams();
    const product = products.find(product => product.id === Number(id));

    return(
        <h1>{product.name}</h1>
    )

}
export default ProductDetails