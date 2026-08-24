import "./FilterSelect.scss"

function FilterSelect() {
    return (
        <button className="FilterSelect" type="button">
            <span>ALL</span>
            <img className="FilterSelect__arrow" src="/filter__icon.svg" alt=""/>
        </button>
    )
}

export default FilterSelect
