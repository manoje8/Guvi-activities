import { useState } from 'react'
import Baglist from './Baglist'
import OrderDetails from './OrderDetails'
import SelectionHeader from './SectionHeader'
import './Cart.css'

const Cart = ({ product }) => {

    //Set a duplicate state
    const [dupProduct, setDupProduct] = useState(product)

    //update the product price and stock
    const updateQuantity = (name, id, currentPrice, currentStock) => {
        const newProduct = dupProduct.map(item => {
            if (item.id === id) 
            {
                if (name === "plus") 
                {
                    return { ...item, price: (product[id-1].price + currentPrice), stock: currentStock - 1}
                } 
                else if (name === "minus") 
                {
                    return { ...item, price: (currentPrice - product[id-1].price), stock: currentStock + 1}
                }
                 else 
                {
                    return item;
                }
            } 
            else 
            {
                return item
            }
        })
        setDupProduct(newProduct)
    }
    

    //delete
    const removeProduct = (id) => {
        setDupProduct(dupProduct.filter(item => item.id !== id))
    }   

    
    //Calculate total amount
    let total = dupProduct.reduce((acc, val) => {
        return acc += val.price
    },0)

    return (
        <div className='cart'>
            <div className='shopping-bag'>
                <SelectionHeader>
                    {dupProduct.map((product) => {
                        return (
                            <Baglist key={product.id} product={product} 
                            updateQuantity={updateQuantity} 
                            removeProduct = {removeProduct}/>
                        )}
                    )}
                </SelectionHeader>
                <OrderDetails total = {total}/>
            </div>

        </div>
    )
}

export default Cart