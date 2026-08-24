import "./SearchInput.scss"

function SearchInput() {
    return (
        <div className="SearchInput">
            <input className="SearchInput__input" type="text" placeholder="Search note..." />
        </div>
    )
}

export default SearchInput