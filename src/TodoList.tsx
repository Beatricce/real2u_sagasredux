import React, { useState, useEffect} from 'react'
import { uuid } from 'uuidv4'

import './style.css'

// import Redux Saga
import { useSelector, useDispatch } from 'react-redux'
//port { setID, setDone, setMessage } from './store/modules/todo/actions'
import { ApplicationState } from './store'

import { getTodosRequest, removeTodoRequest, changeTodoRequest } from './store/modules/todo/actions'

import Todo from './components/Todo'

interface TodoData {
    id: string,
    message: string,
    done: boolean
}


function RenderTodos(){
    const dispatch = useDispatch()
    const todos = useSelector((state: ApplicationState) => state.todo.todos)
    
    useEffect(() => {
        dispatch(getTodosRequest())
      }, [])
      
    function handleDelete(id: string) {
        alert("id to delete: " + id)
        dispatch(removeTodoRequest(id))
    }

    function changeStatus(id: string) {
        alert("id to change: " + id)
        dispatch(changeTodoRequest(id))
    }


    /*function handleAdd() {
        const newTodo = {
            id: uuid(),
            message: todo,
            done: false
        }
        dispatch(removeTodoRequest(newTodo))
    }*/

    return(
        <div id="todoList">
            <h1>TodoList</h1>

            {/*<div className="todoInput">
                <input type="text" value={todo} onChange={e=>setTodo(e.target.value)} />
                <button type="button" 
                className="addTodo"
                onClick={addTodo}> Add</button>
            </div>*/}

            <div>
                {
                    todos.map(todo =>  <Todo todo={todo} handleDelete={handleDelete} changeStatus={changeStatus}/> )
                }
            </div>

        </div>
    )

    
}