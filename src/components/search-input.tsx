import styles from "@/components/search-input.module.scss";

export default function SearchInput({search, setSearch} : {search: string, setSearch: (search: string) => void} ) {
    return <div className={styles['search-input']} data-testid='search-input-component' >
        <input data-testid='search-input' className='input full-width' placeholder='Search for...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <button className={styles['search-button']}>
            <img alt='search' src='/search.svg'/>
        </button>
    </div>
}