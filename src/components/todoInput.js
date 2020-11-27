import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
import {v1 as uuid} from 'uuid'
const TodoInput = () => {
    let dispatch = useDispatch()

    const [todoItem, updateTodoItem] = useState({
        title: "",
        description: ""
    })

    const { title, description } = todoItem

    const handleOnClick = e => {
        e.preventDefault();
        let obj = {
            id: uuid(),
            title,
            description,
            createAt: Date(),
            isComplete: false,
        }
      
        dispatch(addTodo(obj))
        updateTodoItem({
            title: "",
            description: ""
        });
    }

    const handleChange = e => {
        e.preventDefault();
        updateTodoItem({
            ...todoItem,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <form className="input-group mb-3 todoInput">
            <input
                onChange={(e) => handleChange(e)}
                value={title}
                name="title"
                type="text" className="form-control" placeholder="Titulo" aria-label="Ingrese Titulo" aria-describedby="button-addon2" />

            <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="description"
                value={description}
                className="form-control" placeholder="Description" aria-label="Ingrese Descripcion" aria-describedby="button-addon2" />

            <div className="input-group-append">
                <button
                    onClick={(e) => handleOnClick(e)}
                    type="submit"
                    className="btn btn-outline-primary">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                        <path fillRule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                    </svg>
                </button>
            </div>
        </form>
    );
}

export default TodoInput;