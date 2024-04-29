//Dependencies
import { useContext } from "react"
// Contexts
import { ProductContext } from "../context/Product"
import Cart from "./Cart"

const Products = () => {
    //Get the value from the context
    const {products} = useContext(ProductContext)
    return (
        <div>
            <Cart product={products}/>
        </div>
    )
}

export default Products