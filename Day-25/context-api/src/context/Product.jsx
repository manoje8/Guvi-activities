import { createContext, useState } from "react";
import data from "../assets/data"

export const ProductContext = createContext({
    products: []
})

const ProductProvider = ({children}) => {

    // State
    const [products, setProducts] = useState(data);
    
    const context = {
        products
    }

    return <ProductContext.Provider value={context}>{children}</ProductContext.Provider>
}

export default ProductProvider