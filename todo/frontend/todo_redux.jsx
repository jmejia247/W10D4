import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store.js'
import { receiveTodos, receiveTodo } from './actions/todo_actions.js'
import Root from './components/root.jsx'
import allTodos from './reducers/selectors';

const store = configureStore();

window.allTodos = allTodos;
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;


document.addEventListener("DOMContentLoaded", () => {
    // debugger
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root);
});
