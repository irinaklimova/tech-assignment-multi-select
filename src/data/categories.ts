import getData from "@/data/common";
import {getFromStorage} from "@/data/storage";

export async function getAllCategories(): Promise<any> {
    const selectedItems = getFromStorage();
    return getData('http://localhost:3000/api/categories').then(res => {
        return res.map((item: string) => {
            const checked = selectedItems.includes(item);
            return { title: item, checked };
        });
    });

}