import React from 'react'
import TodoListContainer from './todo_list_container'
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'


export default ({todos, recieveTodo}) => {
    return (<div>
        <ul>
            {todos.map((ele) => {
                return <TodoListItem todo={ele} />
            })}
        </ul>
        <TodoForm recieveTodo={recieveTodo}/>

    </div>)
}