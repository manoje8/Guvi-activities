import { useSelector } from "react-redux";

const SelectionHeader = ({children}) => {
    const {products} = useSelector((state) => state.cart);
    return (
        <div className='shopping-column'>
        <section className='selection'>
            <div className='selection-header'>
                <h2 className='sub-title'>{products.length === 0 ? "CART IS EMPTY" : "YOUR SELECTIONS"}</h2>
                {children}
            </div>
        </section>
    </div>
    );
  };
  
  export default SelectionHeader;