import "./Modal.scss"
import React from 'react';

function Modal({ onClose, onAddTask, initialText, title }) {
    const [text, setText] = React.useState(initialText);

    return (
        <div className="Modal__overlay">
            <div className="Modal__window">
                <h2 className="Modal__title">{title}</h2>
                <input className="Modal__input" type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Input your note..." />
                <div className="Modal__buttons">
                    <button className="Modal__cancel" type="button" onClick={onClose}>CANCEL</button>
                    <button className="Modal__apply" type="button" onClick={() => {
                        onAddTask(text)
                        onClose();
                    }}>APPLY</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;