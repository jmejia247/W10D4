export default function allTodos(state){
    return Object.keys(state.todos).map((id) => {
        return state.todos[id];
    })
}

