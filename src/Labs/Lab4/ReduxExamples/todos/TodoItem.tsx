import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo}: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <ListGroup.Item key={todo.id} className="todo-item d-flex align-items-center justify-content-between">
            <div>{todo.title}</div>
            <div>
            <Button id="wd-set-todo-click" onClick={() => dispatch(setTodo(todo))}>Edit</Button>
            <Button id="wd-delete-todo-click" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
            </div>
            </ListGroup.Item>);}   