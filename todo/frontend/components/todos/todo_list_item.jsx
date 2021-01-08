import React from 'react';


export default function TodoListItem(props){
    return (
        <li key={ props.todo.id }>
            { props.todo.title }
            <button onClick={ (event) => {
                event.preventDefault();
                props.removeTodo(props.todo);
            } }>Delete</button>
            <button onClick={ (event) => {
                event.preventDefault();
                let todoCopy = Object.assign({}, props.todo);
                todoCopy.done = !todoCopy.done;
                props.receiveTodo(todoCopy);
            } }>{ props.todo.done ? 'undo' : 'done' }</button>
        </li>
    )
}