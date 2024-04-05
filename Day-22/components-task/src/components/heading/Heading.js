import "./Heading.css"

function Heading(param) {
    return (
        <div className={param.classStyle}>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            <h1 className="mb-5">{param.title}</h1>
                            <div className="row">
                                <div className="col">
                                    <input id="emailAddress" className="form-control form-control-lg" type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading;