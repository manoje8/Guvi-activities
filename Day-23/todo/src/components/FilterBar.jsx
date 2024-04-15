import "../App.css"

const FilterBar = (props) => {

    const { filter } = props;

    const handlerChange = ({ target: { value } }) => {
        filter(value);
    }

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-auto mr-auto">
                    <p>Todo</p>
                </div>
                <div className="col-auto">
                    <label>
                        Status Filter :
                        <select className="filter" name="filter" id="filter" defaultValue="All" onChange={handlerChange}>
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="Not Completed">Not Completed</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FilterBar;