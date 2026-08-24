import "./SearchInput.scss"

function SearchInput() {
    return (
        <div className="SearchInput">
            <input className="SearchInput__input" type="text" placeholder="Search note..." />
            <img className="SearchInput__icon" src="/search-icon.svg" alt=""/>
        </div>
    )
}

export default SearchInput