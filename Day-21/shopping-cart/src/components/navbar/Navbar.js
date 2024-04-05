import './Navbar.css'

function Navbar(props){
    return(
        <div  className='primary-nav'>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Shopping</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href='/' role="button" data-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">All Product</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/">Popular Items</a>
                                    <a className="dropdown-item" href="/">New Arrivals</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <button className="btn">
                    <div className="cart"></div>
                    <p className="nav-link"> Cart</p>
                    <p className='cart-count'>{props.cartCount}</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar;