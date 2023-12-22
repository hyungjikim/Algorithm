function solution(todo_list, finished) {
    const undo = finished.map((f,i) => ({done: f, idx:i, todo: todo_list[i]}))
    return undo.filter(({done}) => !done).map(({todo}) => todo);
}