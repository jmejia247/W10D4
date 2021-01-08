
export default function allTodos(state){
    // debugger
    return Object.keys(state.todos).map((id) => {
        // debugger
        return state.todos[id];
    })
}
