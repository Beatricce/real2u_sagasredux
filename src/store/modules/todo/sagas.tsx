import { call, all, takeLatest, put, select } from 'redux-saga/effects'

import { getTodosSuccess, removeTodoSuccess} from './actions'
import { AnyAction } from 'redux'

import { ApplicationState } from '../../index'

import { TodoTypes, TodoData } from './types'
import { uuid } from 'uuidv4'

function* getTodos() {
  //const todosData = localStorage.getItem("todoList")
  const mock = [
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
    ]

  yield put(getTodosSuccess(mock))
}

function* removeTodo({ payload }: AnyAction) {
  const todos = yield select((state: ApplicationState) => state.todo.todos)

  const updatedTodos = todos.filter((todo: TodoData) => todo.id !== payload.id)

  console.log(payload)

  yield put(removeTodoSuccess(updatedTodos))
}

function* changeTodo({ payload }: AnyAction) {
    const todos = yield select((state: ApplicationState) => state.todo.todos)
    todos.map(todo =>
        ({...todo, done: todo.id==payload.id?(!todo.done):(todo.done)})

    )

    console.log(payload)
  
    yield put(getTodosSuccess(todos))
  }

export default all([
  takeLatest(TodoTypes.GET_TODOS_REQUEST, getTodos),
  takeLatest(TodoTypes.REMOVE_TODO_REQUEST, removeTodo),
  takeLatest(TodoTypes.CHANGE_TODO_REQUEST, changeTodo)
])