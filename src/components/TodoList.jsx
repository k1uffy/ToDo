import "./TodoList.scss"
import TodoItem from './TodoItem';

function TodoList( {tasksCollection, toggleTask, deleteTask, startEditing} ) {
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
                    <TodoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} startEditing={startEditing}/>
                )
            })}
        </div>
    )
}

export default TodoList;