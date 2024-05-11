import { useSelector } from "react-redux";

// Components

import OrderDetails from '../OrderDetails'
import Baglist from '../Baglist'
// UI

import SelectionHeader from '../UI/cart/SectionHeader';
import './Cart.css'

const Cart = () => {

    const { products } = useSelector(state => state.cart)
    
    //Calculate total amount
    let total = products.reduce((acc, val) => {
        if(isNaN(val.qPrice))
        {
            return acc += val.price
        }else
        {    
            return acc += val.qPrice
        }
    },0)

    return (
        <div className='cart'>
            <div className='shopping-bag'>
                <SelectionHeader>
                {products.map((product, id) => {
                        return (
                            <Baglist key={id} product={product}/>
                        )}
                    )}
                </SelectionHeader>
                <OrderDetails total = {total}/>
            </div>

        </div>
    )
}

export default Cart