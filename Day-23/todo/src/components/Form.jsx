import { useEffect, useState } from 'react';
import './Form.css'

const Form = (props) => {

    let { onAddTodo, editTodo, updateTodo, inputRef } = props;

    const [values, setValues] = useState(
        {
            name: "",
            description: "",
            status: false
        }
    )

    useEffect(() => {
        if (editTodo) {
            setValues({ ...editTodo[0] }); // Update values from editTodo
        } else {
            setValues({ name: "", description: "", status: false });
        }
    }, [editTodo])


    const addTodoHandler = (event) => {
        event.preventDefault();

        if (!editTodo) {
            if (values.name.trim().length === 0 || values.description.trim().length === 0) {
                return;
            }
            onAddTodo(Date.now().toString(), values);
            // Resetting input value
            values.name = "";
            values.description = "";
        } else {
            updateTodo(values, editTodo[0].id, editTodo[0].status)
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <div>
            <form className="form-container p-4" onSubmit={addTodoHandler}>
                <div className='col'>
                    <input type="text" className="form-control" placeholder="Todo name"
                        name="name"
                        ref={inputRef}
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>

                <div className='col'>
                    <input type="text" className="form-control" placeholder="Todo Description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                    />
                </div>

                <div className='col-2'>
                    <button className="btn btn-success">{editTodo ? "Update" : "Add todo"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;