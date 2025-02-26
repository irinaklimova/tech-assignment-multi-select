const KEY = 'selected-categories';

export function saveToStorage(items: string[]) {
    localStorage.removeItem(KEY);
    localStorage.setItem(KEY, JSON.stringify(items));
}

export function getFromStorage() {
    let result = [];
    const item = localStorage.getItem(KEY);
    try {
        if (item) {
            result = JSON.parse(item);
        }
    } catch {
        result = [];
    }
    return result;
}