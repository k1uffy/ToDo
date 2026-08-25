import "./TodoList.scss"
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div className="TodoList">
            <TodoItem text="NOTE #1"/>
            <TodoItem text="NOTE #2"/>
            <TodoItem text="NOTE #3"/>
        </div>
    )
}

export default TodoList;