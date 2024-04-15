import Card from "./model/Card";

const TodoItem = (props) => {

    const { id, name, description, status } = props.value;
    const { editItem, deleteItem, updateStatus } = props;

    const filter = status === true ? "Completed" : "Not Completed"

    return (
        <Card>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <div className="mb-4">
                <label>
                    Status :
                    <select className="btn text-white" name="status" id="status" value={filter}
                        onChange={() => updateStatus(id)}
                        style={status ? { backgroundColor: "green" } : { backgroundColor: "orangered" }}>
                        <option className="bg-white text-dark" value="Completed">Completed</option>
                        <option className="bg-white text-dark" value="Not Completed">Not Completed</option>
                    </select>
                </label>
            </div>


            <div className="d-flex justify-content-end">
                <button className="btn btn-success mr-2" onClick={() => editItem(id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteItem(id)}>delete</button>
            </div>
        </Card>
    )
}

export default TodoItem;