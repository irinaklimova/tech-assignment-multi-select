'use client'
import styles from "@/app/categories/page.module.scss";
import {useEffect, useState} from "react";
import {getAllCategories} from "@/data/categories";
import MultiSelect from "@/components/multi-select";
import {Category} from "@/types/category";

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        let cancelled = false;
        setMessage('Loading data');
        getAllCategories().then(res => {
            if (!cancelled) {
                setCategories(res);
                setMessage('');
            }
        }).catch(err => {
            if (!cancelled) {
                setMessage(`Can't load the data: ${err}`);
            }
        });
        return () => {
            cancelled = true;
        }
    }, []);

    function handleApply(items: Category[]) {
        setSelectedCategories(items);
    }
    return <div>
        <section>
            <MultiSelect items={categories} handleApply={handleApply} message={message} />
        </section>
        <section className={styles['search-results']}>
            {!!selectedCategories.length && <span>Search results for selected categories</span>}
            {!selectedCategories.length && <span>Please, select categories to see result</span>}
        </section>
    </div>
}