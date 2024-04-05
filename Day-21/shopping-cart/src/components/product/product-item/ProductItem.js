import { useState } from "react";
import "./ProductItem.css"

function ProductItem({items, props}){
    const [isAdded, setIsAdded] = useState(false);

    const handleBtn = () => {
        setTimeout(() => {
            if (isAdded) {
                setIsAdded(false);
                props.reduceCount();
            }else
            {
                setIsAdded(true);
                props.addCount();
            }
        },500)
    }

    return(
        <div className="container pt-5 ">
                <div className="col mb-4">
                    <div className="card h-100">
                        <span className="border">
                            <img src={items.image} className="card-img-top h-40" alt="..."/>
                        </span>
                        <div className="card-body">
                            <p className="card-text"><b>{items.title}</b></p>
                            {
                                items.rating? <p className="card-text">{items.rating}</p>:<br/>
                            }
                            <p className="card-text">{items.cost}</p>
                            <div id="btn-container">
                                {
                                    <button className="btn btn-outline-dark" onClick={handleBtn}>
                                        {items.text === isAdded ? "Add to Cart": "Remove from cart"}
                                    </button>
                                }
                            </div>                           
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductItem;