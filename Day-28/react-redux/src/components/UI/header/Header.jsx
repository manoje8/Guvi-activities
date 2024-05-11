import { Link } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux';


const Header = () => {
    const {products} = useSelector((state) => state.cart);

    const heartHollow = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
    )

    const heartFilled = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
    )

    return(
    <div className="header" style={{ height: "88px" }}>
        <div className='title'>
            <h1 className='name'>Shopping</h1>
        </div>
        <nav className='header-utility'>
            <ul className='utility-items list'>
                <li className='utility-item -menu'>
                    <Link className='button' to= '/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <span className='list-label'>Menu</span>
                    </Link>
                </li>
                <li className='utility-item -search'>
                    <Link className='button' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        <span className='list-label'>Search</span>
                    </Link>
                </li>
                <li className='utility-item -wishlist'>
                    <span className='wishlist-count'>{products.length}</span>
                    <Link className='icon-container' to= "/cart">
                        {products.length === 0 ? heartHollow :heartFilled}
                    </Link>
                </li>
                <li className='utility-item -profile'>
                    <Link className='icon-container'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
)
}
export default Header