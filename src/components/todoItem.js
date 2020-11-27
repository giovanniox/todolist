import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo,updateTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {


  const { id, isComplete, title, description, createAt } = todo
  const [update, setUpdate] = useState(false)
  const [todoUpdate, setTodoUpdate] = useState({
    isComplete,
    title,
    description,
  })
  let dispatch = useDispatch()


  return (

    <div className="card-deck todoItem">
      <div className="card">
        <div className='card-header'>
          
            <div onClick={(e)=>{
              e.preventDefault();
              setTodoUpdate({
                ...todoUpdate,
                isComplete: !todoUpdate.isComplete
              })
              dispatch(updateTodo(
                {
                  ...todoUpdate,
                  id,
                  createAt
                }
              ))
            }} 
             className="text-decoration-none">
              {todoUpdate.isComplete ?
                <span style={{ color:'#0fa90cc7'}}>
                  <svg width="2em" height="2em" style={{marginRight: '2px'}} viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                  </svg>
              completo
              </span>
                :
                <span style={{ color:'#00000075'}}>
                  <svg width="1em" height="1em"  style={{marginRight: '5px'}} viewBox="0 0 16 16" className="bi bi-app" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                  </svg>
              incompleto
              </span>
              }
            </div>
        

        </div>
        <div className="card-body">
          <h5 className="card-title">
            {
              update ?
                <input
                  value={todoUpdate.title}
                  onChange={(e)=>{
                    setTodoUpdate({
                      ...todoUpdate,
                      title:e.target.value
                    })
                  }}
                  type="text" className="form-control" />
                : title === '' ? "Sin Titulo" : title
            }
          </h5>
          <p className="card-text">
            {
              update ?
                <input
                  value={todoUpdate.description}
                  onChange={(e)=>{
                    setTodoUpdate({
                      ...todoUpdate,
                      description:e.target.value
                    })
                  }}
                  type="text" className="form-control" />
                : description === '' ? "Sin Descripcion" : description
            }
          </p>
        </div>
        <div className="card-footer">

          <div className="">
            <small className="text-muted">{createAt}</small>
            <div>
              <button type="button"
                onClick={() => {
                  if (update) {
                    dispatch(updateTodo(
                      {
                        ...todoUpdate,
                        id,
                        createAt
                      }
                    ))
                  }
                  setUpdate(!update)
                }}
                className="btn btn-outline-success btn-custom" >
                {
                  update ?
                    "update"
                    :
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                      <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                    </svg>
                }

              </button>

              <button
                onClick={() => dispatch(deleteTodo(id))}
                type="button" className="btn btn-outline-danger btn-custom">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div >


  );
}

export default TodoItem;