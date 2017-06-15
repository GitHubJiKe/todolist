const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
const CHANGE_SHOW_TYPE = 'CHANGE_SHOW_TYPE';
const status = ['undo','finished'];
const initState = {
    todolist:[],
    undoList:[],
    finishedList:[],
    showing:status[0]
};
const todoState = {id:'',context:'',status:''};

export  default function todos(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
        state.todolist.push(action.todoItem);
        state.todolist.forEach(v=>{
            if(v.status === status[0]) if(!state.undoList.includes(v)) state.undoList.push(v);
            if(v.status === status[1]) if(!state.finishedList.includes(v)) state.finishedList.push(v);
        })
        return {...state};
        case REMOVE_TODO:
        state.todolist = state.todolist.filter((v=>{
            return v.id != action.id;
        }));
        var newUndo = [];
        var newFinished = [];
        state.todolist.forEach(v=>{
            if(v.status === status[0]) if(!newUndo.includes(v)) newUndo.push(v);
            if(v.status === status[1]) if(!newFinished.includes(v)) newFinished.push(v);
        })
        return {...state,undoList:newUndo,finishedList:newFinished,showing:state.showing};
        case CHANGE_TODO_STATUS:
        state.todolist.forEach(v=>{
            if(v.id == action.id){
                v.status = action.status;
            }
            if(v.status === status[0]) {
                if(!state.undoList.includes(v)) {
                    state.undoList.push(v);
                    if(state.finishedList.includes(v)){
                        //delete
                        state.finishedList = state.finishedList.filter(vv=>{
                            return v.id != vv.id;
                        });
                    }
                }
            }
            if(v.status === status[1]) {
                if(!state.finishedList.includes(v)){
                     state.finishedList.push(v);
                     if(state.undoList.includes(v)){
                         //delete
                         state.undoList = state.undoList.filter(vv=>{
                             return v.id != vv.id;
                         });
                     }
                }
            }
        })
        state.todolist.forEach(v=>{
            if(v.status === status[0]) if(!state.undoList.includes(v)) state.undoList.push(v);
            if(v.status === status[1]) if(!state.finishedList.includes(v)) state.finishedList.push(v);
        })
        return {...state};
        case CHANGE_SHOW_TYPE:
        state.showing = action.showing;
        state.todolist.forEach(v=>{
            if(v.status === status[0]) if(!state.undoList.includes(v)) state.undoList.push(v);
            if(v.status === status[1]) if(!state.finishedList.includes(v)) state.finishedList.push(v);
        })
        return {...state};
        default:
        return {...state};
    }
}