const Container = (props) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
                {props.children}
            </div>
        </div>
    )
}

export default Container;