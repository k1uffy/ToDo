import "./AddButton.scss"

function AddButton({ OnClick }) {


    return (
        <button className="AddButton" type="button" onClick={OnClick}>
            <img className="AddButton__icon" src="/plus-icon.svg" alt="Add note"/>
        </button>
    )
}

export default AddButton;