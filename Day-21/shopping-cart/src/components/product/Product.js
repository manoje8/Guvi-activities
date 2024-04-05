import Items from "../data/Items";
import ProductItem from "./product-item/ProductItem";

function Product(props){
    return(
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-4'>
                {
                    Items.map((data) => {
                        return(
                            <ProductItem key={data.id} items={data} props = {props}/>
                        )
                })}
            </div>
        </div>
)
}

export default Product;