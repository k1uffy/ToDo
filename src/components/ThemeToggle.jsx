import "./ThemeToggle.scss"

function ThemeToggle() {
    return (
        <button className="ThemeToggle" type="button">
            <img className="ThemeToggle__icon" src="/dark-theme-icon.svg" alt="ThemeToggle"/>
        </button>
    )
}

export default ThemeToggle;