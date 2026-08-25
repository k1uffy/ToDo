import "./TodoItem.scss"
import { useState } from 'react';

function TodoItem(){
    return (
        <div className="TodoItem">
            <label className="TodoItemCheckbox">
                <input type="checkbox" className="TodoItemCheckbox__input"/>
                <span className="TodoItemCheckbox__box"></span>
                <span className="TodoItemCheckbox__text">NOTE #1</span>
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

