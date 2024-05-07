// Dependencies
import { useContext, useState } from "react"

// Contexts
import { UserContext } from "../context/User"

//component
import UserTable from "./UI/UserTable"

const Users = () => {

    // Here you consume your Context, and you can grab the user value and method.
    const { users, deleteUser, updateUser } = useContext(UserContext);

    //state for update
    const [updateValue, setUpdateValue] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
    });

    //state for using update fields
    const [editFlag, setEditFlag] = useState(false);
    const [editId, setEditId] = useState("");

    //set update value to state
    const handlerEdit = (id) => {
        setEditFlag(true);
        setEditId(id);
        setUpdateValue({ ...users[id] }); // Update with specific user object
    };

    //update user
    const updatedUser = () => {
        updateUser(updateValue);
        setEditFlag(false);
    };

    //Delete handler
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
        deleteUser(id);
        }
    };

    
    const handleChange = ({ target: { name, value } }) => {
        setUpdateValue({
        ...updateValue,
        [name]: value,
        });
    };

    return (
        <div>
            <UserTable>
                {
                    users.map((user, id) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{id + 1}</th>
                                <td>{editId === id && editFlag ? <input name = "name" value={updateValue.name} onChange={handleChange}/>
                                : user.name}</td>
                                <td>{editId === id && editFlag ? <input name = "username" value={updateValue.username} onChange={handleChange}/>
                                : user.username}</td>
                                <td>{editId === id && editFlag ? <input name = "email" value={updateValue.email} onChange={handleChange}/>
                                : user.email}</td>
                                <td>{editId === id && editFlag ? <input name = "phone" value={updateValue.phone} onChange={handleChange}/>
                                : user.phone}</td>
                                {
                                    editId === id && editFlag ? 
                                    <td>
                                        <button className="btn text-white btn-dark mt-2 ml-4" onClick={updatedUser}>Update</button>
                                        <button className="btn btn-dark mt-2 ml-4" onClick={() => setEditFlag(false)}>Cancel</button>
                                    </td>
                                        :
                                    <td>
                                        <button className="btn text-white btn-dark mt-2 ml-4" onClick={() => handlerEdit(id)}>Edit</button>
                                        <button className="btn btn-dark mt-2 ml-4" onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                }
                            </tr>
                        )
                    })
                }
            </UserTable>
        </div>
    )
}

export default Users