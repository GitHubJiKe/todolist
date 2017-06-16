import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_TODO_STATUS,
  CHANGE_SHOW_TYPE,
  REMOVEALL_BY_TYPE,
  status
} from '../constants/actionName'



export const addTodoItem = (todoItem) => {
  return function (dispatch) {
    dispatch({
      type: ADD_TODO,
      todoItem: todoItem
    });
  }
}

export const removeTodoItem = (id) => {
  return function (dispatch) {
    dispatch({
      type: REMOVE_TODO,
      id: id
    });
  }
}

export const chanegTodoStatus = (id, status) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_TODO_STATUS,
      id: id,
      status: status
    });
  }
}

export const chanegShowType = (type) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_SHOW_TYPE,
      showing: type
    });
  }
}

export const removeAllByType = (type) => {
  return function (dispatch) {
    dispatch({
      type: REMOVEALL_BY_TYPE,
      removeType: type
    });
  }
}