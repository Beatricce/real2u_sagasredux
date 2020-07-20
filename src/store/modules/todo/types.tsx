export enum TodoTypes {
    'SET_TODO_NAME' = "@todo/SET_TODO_NAME",
    //'SET_ID' = '@todo/SET_ID',
    //'SET_MESSAGE' = '@todo/SET_MESSAGE',
    //'SET_DONE' = '@todo/SET_DONE',
    'GET_TODOS_SUCCESS' = '@todo/GET_TODOS_SUCCESS',
    'GET_TODOS_REQUEST' = '@todo/GET_TODOS_REQUEST',
    'REMOVE_TODO_REQUEST' = '@todo/REMOVE_TODO_REQUEST',
    'REMOVE_TODO_SUCCESS' = '@todo/REMOVE_TODO_SUCCESS',
    'CHANGE_TODO_REQUEST' = '@todo/CHANGE_TODO_REQUEST',
    'ADD_TODO_REQUEST' = '@todo/ADD_TODO_SUCCESS',
    'ADD_TODO_SUCCESS' = '@todo/ADD_TODO_SUCCESS',
  }

  export interface TodoData {
    id: string
    message: string
    done: boolean
  }

  export interface TodoState {
    name: string, 
    todos: TodoData[]
  }