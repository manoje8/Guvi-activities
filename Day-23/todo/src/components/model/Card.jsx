import "./Card.css"

const Card = (param) => {
    return (
        <div>
            <div className="col mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        {param.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card