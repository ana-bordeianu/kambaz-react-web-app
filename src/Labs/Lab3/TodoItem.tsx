const TodoItem = ( { todo = { done: true, title: 'Buy milk', status: 'COMPLETED' } }) => {
    return (
    <div id="wd-todo-item">
    <li className="list-group-item">
    <input type="checkbox" className="me-2" defaultChecked={todo.done}/>
    {todo.title} ({todo.status}) </li>
    </div>    
); }
    export default TodoItem;