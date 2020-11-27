import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from './actions'
import { todos } from './states';

export let reducer = (state = todos, action) => {
    let newTodo
    switch (action.type) {
        case ADD_TODO:
            newTodo = [...state] 
            newTodo.push(action.payload)  
            return newTodo
        case UPDATE_TODO:
            newTodo = [...state]
            let index = -1
            console.log(action.payload)
            for (let i = 0; i < newTodo.length; i++){
                index++;
                if(newTodo[i].id == action.payload.id){
                    break;
                }
            }
            if(index != -1) {
                newTodo[index] = action.payload
                return newTodo;
            }

        case DELETE_TODO:
            newTodo = [...state]
            newTodo = newTodo.filter(todo => todo.id !== action.payload)
            return newTodo
        default:
            return state;
    }
    return state;
}