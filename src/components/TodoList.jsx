import "./TodoList.scss"
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div className="TodoList">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList;