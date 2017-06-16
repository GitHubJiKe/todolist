const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
const CHANGE_SHOW_TYPE = 'CHANGE_SHOW_TYPE';
const REMOVEALL_BY_TYPE = 'REMOVEALL_BY_TYPE';
const status = ['undo', 'finished'];
const initState = {
    undoList: [],
    finishedList: [],
    showing: status[0]
};
const todoState = { id: '', context: '', status: '' };

export default function todos(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            state.undoList.push(action.todoItem);
            return { ...state };
        case REMOVE_TODO:
            var index1 = state.undoList.findIndex(v => { return v.id === action.id; });
            var index2 = state.finishedList.findIndex(v => { return v.id === action.id; });
            if (index1 > -1) state.undoList.splice(index1, 1);
            if (index2 > -1) state.finishedList.splice(index1, 1);
            return { ...state };
        case CHANGE_TODO_STATUS:
            var index1 = state.undoList.findIndex(v => { return v.id === action.id })
            var index2 = state.finishedList.findIndex(v => { return v.id === action.id })
            if (index1 > -1) {
                var toPush = state.undoList[index1];
                toPush.status = action.status;
                state.finishedList.push(toPush);
                state.undoList.splice(index1, 1);
            }
            if (index2 > -1) {
                var toPush = state.finishedList[index2];
                toPush.status = action.status;
                state.undoList.push(toPush);
                state.finishedList.splice(index2, 1);
            }
            return { ...state };
        case CHANGE_SHOW_TYPE:
            state.showing = action.showing;
            return { ...state };
        case REMOVEALL_BY_TYPE:
            if(action.removeType === status[0]) state.undoList = [];
            else state.finishedList = [];
            return { ...state };
        default:
            return { ...state };
    }
}