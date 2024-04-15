import { useRef, useState } from "react";
import Container from "./model/Container";
import FilterBar from "./FilterBar";
import Form from "./Form";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [todoItem, setTodoItem] = useState([]);
    const [filter, setFilter] = useState("");
    const [editTodo, setEditTodo] = useState(null);
    const inputRef = useRef(null);

    // Pushing the new todo to the list
    const addTodoHandler = (id, value) => {
        const name = value.name;
        const description = value.description;
        const status = value.status;
        setTodoItem((prev) => {
            return [...prev, { id, name, description, status }]
        })
    }

    // Pushing the filter option
    const filterBar = (value) => {
        setFilter(value.toLowerCase());
    }

    // Delete an item from the list
    const deleteItem = (id) => {
        setTodoItem(todoItem.filter((item) => item.id !== id))
    }


    // Update a status in the list
    const updateStatus = (itemId) => {
        setTodoItem(todoItem.map((item) => {
            if (item.id === itemId) {
                return { ...item, status: !item.status }
            }
            return item;
        }))
    }

    // Add an selected item to edit
    const editItem = (id) => {
        inputRef.current.focus();
        const findTodo = todoItem.filter(val => val.id === id);
        setEditTodo(findTodo);
    }

    // Update the item in the list
    const updateTodo = (value, id, stat) => {
        const newTodo = todoItem.map((todo) => {
            const name = value.name;
            const description = value.description;
            const status = stat;
            return (
                todo.id === id ? { id, name, description, status } : todo
            );
        })
        setTodoItem(newTodo);
        setEditTodo("")
    }

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Todo</h3>
            <Form onAddTodo={addTodoHandler} editTodo={editTodo} updateTodo={updateTodo} inputRef={inputRef} />
            <FilterBar filter={filterBar} />
            <Container>
                {
                    todoItem.filter((item) => filter === "completed" ? item.status : filter === "not completed" ? !item.status : todoItem)
                    .map((value, id) => {
                        return (
                            <TodoItem key={id} value={value} editItem={editItem} deleteItem={deleteItem} updateStatus={updateStatus} />
                        )}
                    )
                }
            </Container>
        </div>
    );
}

export default Todo;