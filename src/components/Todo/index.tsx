import React from 'react'

import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'

import './style.css'

interface TodoData {
    _id: string,
    message: string,
    done: boolean
}

interface Todo{
    todo: TodoData
    handleDelete: (_id: string) => void
    changeStatus: (_id: string) => void
}


const TodoList: React.FC<Todo> = ({todo, handleDelete, changeStatus}: Todo) => {
    /*const mock = [
        {
            id: uuid(),
            message: "Teste 1",
            done: false
        },
        {
            id: uuid(),
            message: "Teste 2",
            done: false
        }
    ]*/

    /*const [todoList, setTodoList] = useState<Todo[]>([])
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

    function addTodo(){
        const newTodo = {
            id: uuid(),
            message: todo,
            done: false
        }

        setTodoList(
            [newTodo, ...todoList]
        )
    }

    function deleteTodo(id: string){
        const filteredData = todoList.filter(item => item.id !== id)
        setTodoList(filteredData)
    }

    function changeStatus(id: String){
        todoList.map(todo =>
            ({...todo, done: todo.id==id?(!todo.done):(todo.done)})

        )
    }
    */
    
    return(
    <div className="todo" key={todo._id}> 
        <div>{todo.message}</div>
        <div className="actions">
            {
                !todo.done?(
                    <button onClick={() => changeStatus(todo._id)} type="button" className="icon">
                    <AiFillCheckCircle color="#27ae60" />
                    </button>
                ):(
                    <button onClick={() => changeStatus(todo._id)} type="button" className="icon">
                    <BsArrowCounterclockwise color= "#e67e22" />
                    </button>
                )
            }


            <button onClick={() => handleDelete(todo._id)} type="button" className="icon">
            <AiFillDelete color="#e74c3c" />
            </button>
            
        </div>
    </div>
    )
}

export default TodoList