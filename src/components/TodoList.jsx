import "./TodoList.scss"
import TodoItem from './TodoItem';

function TodoList( {tasksCollection} ) {
    return (
        <div className="TodoList">
            {tasksCollection.length === 0 && (
                <div className="TodoList__empty">
                    <img src="/empty.svg" alt="Empty TodoList" />
                    <p>Empty...</p>
                </div>
            )}
            {tasksCollection.map((task) => {
                return (
                    <TodoItem key={task.id} task={task}/>
                )
            })}
        </div>
    )
}

export default TodoList;