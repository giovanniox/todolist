import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';

const TodoList = () => {
    let todos = useSelector(state => state)

    return (
        <Fragment>
            <h1 className='text-center'>TO - DO</h1>
            <div>
                {todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} />
                })}
            </div>
        </Fragment>
    );
}

export default TodoList;