const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
const CHANGE_SHOW_TYPE = 'CHANGE_SHOW_TYPE';
const status = ['undo','finished'];



export const addTodoItem = (todoItem) => {
  return function (dispatch) {
    dispatch({
        type:ADD_TODO,
        todoItem:todoItem
    });
  }
}

export const removeTodoItem = (id) => {
  return function (dispatch) {
    dispatch({
        type:REMOVE_TODO,
        id:id
    });
  }
}

export const chanegTodoStatus = (id,status)=>{
    return function (dispatch) {
    dispatch({
        type:CHANGE_TODO_STATUS,
        id:id,
        status:status
    });
  }
}

export const chanegShowType = (type)=>{
    return function (dispatch) {
    dispatch({
        type:CHANGE_SHOW_TYPE,
        showing:type
    });
  }
}