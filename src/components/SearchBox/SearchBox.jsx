import css from "./SearchBox.module.css"
export default function SearchBox({value, onSearch}) {
    return (
        <div className={css.searchWrapper}>
            <p>Find contacts by name</p>  
            <input
                className={css.searchInput}
                type="text"
                value={value}
                onChange={e => onSearch(e.target.value)} />
        </div>
    );
}
