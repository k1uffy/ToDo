import "./TodoItem.scss"

function TodoItem({ task, toggleTask, deleteTask, startEditing }) {
    return (
        <div className={ task.completed ? "TodoItem TodoItem--completed": "TodoItem" }>
            <label className="TodoItemCheckbox">
                <input type="checkbox" className="TodoItemCheckbox__input" checked={task.completed} onChange={() => toggleTask(task.id)}/>
                <span className="TodoItemCheckbox__box"></span>
                <span className="TodoItemCheckbox__text">{task.text}</span>
            </label>

            <div className="NoteActions">
                <button className="EditButton" type="button" onClick={() => startEditing(task.id)}>
                    <img src="/edit-button.svg" className="icon icon--default" alt="Редактировать" />
                    <img src="/edit-button-checked.svg" className="icon icon--checked" alt="" aria-hidden="true" />
                </button>

                <button className="DeleteButton" type="button" onClick={() => deleteTask(task.id)}>
                    <img src="/delete-button.svg" className="icon icon--default" alt="Удалить" />
                    <img src="/delete-button-checked.svg" className="icon icon--checked" alt="" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
export default TodoItem;