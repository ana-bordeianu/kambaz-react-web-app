import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className="todo-form-item d-flex align-items-center justify-content-between">
            <FormControl
                className="me-2"
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            />
            <div className="d-flex gap-2">
            <Button id="wd-update-todo-click" onClick={() => dispatch(updateTodo(todo))}>Update</Button>
            <Button id="wd-add-todo-click" onClick={() => dispatch(addTodo(todo))}>Add</Button>
            </div>
        </ListGroup.Item>

    );
}
