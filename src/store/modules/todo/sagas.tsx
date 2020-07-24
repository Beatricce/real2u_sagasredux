import { call, all, takeLatest, put, select } from 'redux-saga/effects'
import api from '../../../services/api'

import { getTodosSuccess, removeTodoSuccess} from './actions'
import { AnyAction } from 'redux'

import { ApplicationState } from '../../index'

import { TodoTypes, TodoData } from './types'
import { uuid } from 'uuidv4'

function* getTodos() {
    const todoData = yield call(api.get, '')
    console.log(todoData.data)
    yield put(getTodosSuccess(todoData.data))
}

function* addTodo({payload}: AnyAction){
    const todos = yield select((state: ApplicationState) => state.todo.todos)
    const newTodo = {
        message: payload.message,
        done: false
    }

    yield call(api.post, '', newTodo)

    const updatedTodos = [newTodo, ...todos]
    yield put(getTodosSuccess(updatedTodos))
}

function* removeTodo({ payload }: AnyAction) {
  const todos = yield select((state: ApplicationState) => state.todo.todos)

  const updatedTodos = todos.filter((todo: TodoData) => todo._id !== payload.id)

  console.log(payload)

  yield put(removeTodoSuccess(updatedTodos))
}

function* changeTodo({ payload }: AnyAction) {
    const todos = yield select((state: ApplicationState) => state.todo.todos)
    const updatedTodos = todos.map((todo: TodoData) =>
        ({...todo, done: todo._id==payload.id?(!todo.done):(todo.done)})

    )
  
    yield put(getTodosSuccess(updatedTodos))
  }

export default all([
  takeLatest(TodoTypes.GET_TODOS_REQUEST, getTodos),
  takeLatest(TodoTypes.REMOVE_TODO_REQUEST, removeTodo),
  takeLatest(TodoTypes.CHANGE_TODO_REQUEST, changeTodo),
  takeLatest(TodoTypes.ADD_TODO_REQUEST, addTodo),
])