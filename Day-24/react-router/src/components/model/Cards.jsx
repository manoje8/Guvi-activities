import './Cards.css'

const Cards = ({children}) => (
    <div className="Cards">
        <div className='row'>
            {children}
        </div>
    </div>
)

export default Cards