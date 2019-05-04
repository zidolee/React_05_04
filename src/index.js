import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


const initialState = {
    todos: ["씻기"],
    a: 'aa',
    b: 'bb'
}

const ADD_TODO = 'ADD_TODO';

function todos(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO :          //Object.assign({},state,{})새로운객체에 기존의 state넣고  추가할 값 덮어쓴다 {새로운 빈객체 }, state, {추가할 값}
            return Object.assign({}, state, {
                todos: [...state.todos, action.content]
            });
        default :
            return state;
    }
}
//스토어 생성
const store = createStore(todos)

console.log(store.getState());
//스토어 바뀔때마다 호출
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type:ADD_TODO,
    content : "abc"
})
/**
 * {
 *      type: ADD_TODO,
 *      contentL "어떤 것이든"
 * }
 */



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
