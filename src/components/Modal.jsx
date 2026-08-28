import "./Modal.scss"

function Modal({ onClose }) {
    return (
        <div className="Modal__overlay">
            <div className="Modal__window">
                <h2 className="Modal__title">NEW NOTE</h2>
                <input className="Modal__input" type="text" placeholder="Input your note..." />
                <div className="Modal__buttons">
                    <button className="Modal__cancel" type="button" onClick={onClose}>CANCEL</button>
                    <button className="Modal__apply" type="button">APPLY</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;