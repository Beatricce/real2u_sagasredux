import { Reducer } from 'redux'

import { TodoState, TodoTypes } from './types'

//import { uuid } from 'uuidv4'

const INITIAL_STATE: TodoState = {
    name: "Bia",
    todos: []
}

const reducer: Reducer<TodoState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TodoTypes.SET_TODO_NAME:
      return {...state, name: action.payload.name}
    case TodoTypes.GET_TODOS_SUCCESS:
      return {...state, todos: action.payload.todos}
    case TodoTypes.REMOVE_TODO_SUCCESS:
      return {...state, todos: action.payload.todos}
    default:
      return state
  }
}

export default reducer