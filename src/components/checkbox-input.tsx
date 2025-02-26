'use client'
import styles from "./checkbox-input.module.scss"
import {Category} from "@/types/category";

export default function CheckboxInput({item, handleCheck}: {item: Category, handleCheck: (item: Category) => void}) {
    return <div>
        <input className={styles.checkbox} checked={item.checked} type='checkbox' onChange={() => handleCheck(item)}></input>
        <span className={styles.label} data-testid='checkbox-label'>{item.title}</span>
    </div>
}