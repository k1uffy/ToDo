import "./TodoItem.scss"

function TodoItem({ text }){
    return (
        <div className="TodoItem">
            <label className="TodoItemCheckbox">
                <input type="checkbox" className="TodoItemCheckbox__input"/>
                <span className="TodoItemCheckbox__box"></span>
                <span className="TodoItemCheckbox__text">{text}</span>
            </label>

            <div className="NoteActions">
                <button className="EditButton">
                    <img src="/edit-button.svg" className="icon icon--default" alt="Редактировать" />
                </button>

                <button className="DeleteButton">
                    <img src="/delete-button.svg" className="icon icon--default" alt="Удалить" />
                </button>
            </div>
        </div>
    )
}
export default TodoItem;

