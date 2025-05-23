import TodoItem from "./TodoItem"; import todos from "./todos.json"; const TodoList = () => {
    return( <div id="wd-todo-item">
    <hr />
    <h3>Todo List</h3>
    <ul className="list-group">
    { todos.map(todo => { return(<TodoItem todo={todo}/>);
    })} </ul><hr/>
    </div> );
    }
    export default TodoList;