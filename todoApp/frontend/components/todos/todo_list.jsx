import React from 'react'
import TodoListContainer from './todo_list_container'
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'


export default ({todos, receiveTodo, removeTodo}) => {
    // debugger
    return (<div>
        <ul>
            {todos.map((ele, idx) => {
                return <TodoListItem todo={ ele } key={ ele.idx } removeTodo={ removeTodo } receiveTodo={ receiveTodo }/>
            })}
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>

    </div>)
}