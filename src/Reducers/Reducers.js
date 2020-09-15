import {createStore, combineReducers, compose} from 'redux';
import {v4 as  uuidv4} from  'uuid';



const todoReducer = (state = [{id:uuidv4(),text:'sadsds',complete:false}],action) => {
    switch(action.type){
        case 'CHANGE':
            return state.map((todo) => 
             todo.id === action.id  ? {...todo,complete:!todo.complete}:todo)
                
        case 'ADD':
            return [
                ...state,
                {
                    id:uuidv4(),
                    text:action.text,
                    complete: false ,
                    view:false
                }
            ]
        default :
            return state
    }
}
const viewReducerDefault ={
    view: null,
}
const viewReducer = (state =viewReducerDefault , action) =>{
    switch (action.type) {
        case 'CHANGE_VIEW' :
            return { 
                ...state,
                view : action.view
            }
        default :
            return state
    }
}
const store = createStore (combineReducers ({
    todo:todoReducer,
    view: viewReducer

}))

export default store;