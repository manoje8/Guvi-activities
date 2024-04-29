const OrderDetails = ({ total }) => (
    <div className='order-details order-summary'>
        <div className='order-details-summary'>
            <div className='order-details-bag'>
                <h2 className='order-summary-title is-title-xs'>
                    Order Summary
                    <div className='order-detail-id'>
                        INCART65498456
                    </div>
                </h2>
                <ul className='order-details-totals'>
                    <li className='sub-total is-text-s-medium'>
                        Subtotal
                        <span className='order-details-subtotal' dir='ltr'>
                            <span dir='ltr'>$ {total}</span>
                            <span className='price-label'></span>
                        </span>
                    </li>
                    <li className='is-text-s-medium'>
                        shipping
                        <span className='order-details-shipping' dir='ltr'>
                            <span dir='ltr'>Free (Premium Express)</span>
                        </span>
                    </li>
                    <li className='is-text-s-medium'>
                        Estimated Tax
                        <span className='order-details-tax' dir='ltr'>
                            <span dir='ltr'>18%</span>
                        </span>
                    </li>
                    <li className='estimated-total is-text-s-medium'>
                        Estimated Total
                        <span className='order-details-total' dir='ltr'>
                            <span dir='ltr'>$ {total}</span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className='order-detail-place-order'>
                <div className='availability'>
                    <div className='is-text-s-medium'>
                        VIEW DETAILS
                    </div>
                    <p className='order-details-note is-text-s-book'>
                        You will be charged at the time of shipment. If this is a personalized or made-to-order purchase, you will be charged at the time of purchase.
                    </p>
                </div>
                <a className='cta is-primary' href="/" style={{ display: "flex" }}>
                    <span>Checkout</span>
                </a>
                <span className="or">Or</span>
                <a className='order-details-button-amazon cta is-primary' href="/" style={{ display: "flex" }}>
                    <span>Pay with amazon</span>
                </a>
            </div>
        </div>
    </div>
)

export default OrderDetails