import "./AddButton.scss"

function AddButton() {
    return (
        <button className="AddButton" type="button">
            <img className="AddButton__icon" src="/plus-icon.svg" alt="Add note"/>
        </button>
    )
}

export default AddButton;