import React, { useState, useEffect} from 'react'
import { uuid } from 'uuidv4'

import './style.css'

// imports Redux Saga
import { useSelector, useDispatch } from 'react-redux'
//port { setID, setDone, setMessage } from './store/modules/todo/actions'
import { ApplicationState } from './store'

import { getTodosRequest, removeTodoRequest, changeTodoRequest, addTodoRequest} from './store/modules/todo/actions'

import Todo from './components/Todo'

interface TodoData {
    id: string,
    message: string,
    done: boolean
}


function RenderTodos(){

    const [todoList, setTodoList] = useState<TodoData[]>([])
    const [todo, setTodo] = useState("")

    useEffect(() => {
        const todos = localStorage.getItem("todoList")
        if(todos){
            setTodoList(JSON.parse(todos))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])
    


    const dispatch = useDispatch()
    const todos = useSelector((state: ApplicationState) => state.todo.todos)

    
    
    useEffect(() => {
        console.log("getTodosRequest")
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


    function handleAdd() {

        dispatch(addTodoRequest(todo))
    }

    return(
        <div id="todoList">
            <h1>TodoList</h1>

            <div className="todoInput">
                <input type="text" value={todo} onChange={e=>setTodo(e.target.value)} />
                <button type="button" 
                className="addTodo"
                onClick={handleAdd}> Add</button>
            </div>

            <div>
                {
                    todos.map(todo =>  <Todo todo={todo} handleDelete={handleDelete} changeStatus={changeStatus}/> )
                }
            </div>

        </div>
    )

    
}

export default RenderTodos