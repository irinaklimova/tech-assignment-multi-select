'use client'
import styles from "./multi-select.module.scss";

import {useEffect, useState} from "react";
import SearchInput from "@/components/search-input";
import CheckboxInput from "@/components/checkbox-input";
import { saveToStorage } from '@/data/storage';
import {Category} from "@/types/category";

export default function MultiSelect({items, handleApply, message } : { items: Category[], handleApply: (items: Category[]) => void, message: string}) {
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        setFilteredItems(items);
    }, [items]);

    function handleCheck(item: Category) {
        const newItem = {
            title: item.title,
            checked: !item.checked
        };
        const index = filteredItems.indexOf(item);
        const newItems = [...filteredItems.slice(0, index), newItem, ...filteredItems.slice(index + 1)];
        setFilteredItems(newItems);
        const checkItems = newItems.filter(item => item.checked).map(item => item.title)
        saveToStorage(checkItems);
    }

    function handleSetSearch(value: string) {
        setSearch(value);
    }

    function getSortedItems() {
        const arr = search ? filteredItems.filter(item => !item.checked).filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : filteredItems.filter(item => !item.checked);
        const checkedArr = filteredItems.filter(item => item.checked);
        return [...checkedArr, ...arr];
    }

    return <div className={styles['multi-select']}>
        <p className='mrg-top-0'><span>Product Group</span></p>
            <SearchInput search={search} setSearch={handleSetSearch}/>
            <ul className={styles.list}>
                {!!getSortedItems().length && getSortedItems().map(item =>
                    <li className={styles['list-item']} key={item.title}>
                        <CheckboxInput item={item} handleCheck={handleCheck}/>
                    </li>
                )}
                {!getSortedItems().length && !message && <span>No data to display</span>}
                {message && <span>{message}</span>}
            </ul>
        <button className='button full-width' onClick={() => handleApply(filteredItems.filter(item => item.checked))}>Apply</button>
        </div>
    }