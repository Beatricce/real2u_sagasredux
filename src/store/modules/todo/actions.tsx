import { action } from 'typesafe-actions'
import { TodoTypes, TodoData } from './types'

//export const setID = (id: string) => action(TodoTypes.SET_ID, {id})
//export const setMessage = (message: string) => action(TodoTypes.SET_MESSAGE, {message})
//export const setDone = (done: boolean) => action(TodoTypes.SET_DONE, {done})
export const getTodosRequest = () => action(TodoTypes.GET_TODOS_REQUEST)
export const getTodosSuccess = (todos: TodoData[]) => action(TodoTypes.GET_TODOS_SUCCESS, { todos })
export const removeTodoRequest = (id: string) => action(TodoTypes.REMOVE_TODO_REQUEST, { id })
export const removeTodoSuccess = (todos: TodoData[]) => action(TodoTypes.REMOVE_TODO_SUCCESS, { todos })
export const changeTodoRequest = (id: string) => action(TodoTypes.CHANGE_TODO_REQUEST, { id })
export const addTodoRequest = (message: string) => action(TodoTypes.ADD_TODO_REQUEST, { message })