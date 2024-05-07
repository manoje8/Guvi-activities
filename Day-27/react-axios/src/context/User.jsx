import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
    users: [],
    url: ''
})

const UserProvider = ({ children, url }) => {
    let navigate = useNavigate();
    //state
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        const response = await axios(url)

        if (response) {
            setUsers(response.data)
        }
    }, [url])

    //Effects
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])



    //Add User
    const addHandler = useCallback(async (event, values) => {
        event.preventDefault();
        
        if (values.name.trim().length === 0 || values.username.trim().length === 0 || values.email.trim().length === 0 || values.phone.trim().length === 0) {
            return;
        }
        const response = await axios.post(url, values)
        if (response) {
            onAddUser(response.data)
            navigate("/users");
        }
        values.name = ""
        values.username = ""
        values.email = ""
        values.phone = ""
    }, [url, navigate])


    //add user into the state
    const onAddUser = (user) => {
        let len = users.length;
        let id = len + 1;
        const { name, username, email, phone } = user

        setUsers((prev) => {
            return [...prev, {id, name, username, email, phone}]
        })
    }

    //Update User
    const updateUser = useCallback(async(value) => {
        try {

            const response = await axios.put(`${url}/${value.id}`, value)

            if(response)
            {
                const updateUserData = response.data;
                const newUsers = users.map(user => user.id === value.id ? updateUserData : user)
                setUsers([...newUsers])
            }
        } catch (error) 
        {
            console.error('Error editing user:', error);
        }
    },[url, users])


    //Delete User
    const deleteUser = useCallback( async(id) => {
        const response = await axios.delete(`${url}/${id}`)
        if(response)
        {
            setUsers(users.filter(user => user.id !== id))
        }
    },[url, users])


    //context
    const context = {
        users,
        addHandler,
        updateUser,
        deleteUser
    }

    return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserProvider
