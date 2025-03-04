import {jest, describe, it, expect, beforeAll} from '@jest/globals';
import {saveToStorage, getFromStorage} from './storage';

const VALUES = ['Category 1', 'Category 2'];
const KEY = 'selected-categories';

let spyRemoveItem: any;
let spySetItem: any;
let spyGetItem: any;

describe('Storage Api ', () => {
    beforeAll(() => {
        spyRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');
        spySetItem = jest.spyOn(Storage.prototype, 'setItem');
        spyGetItem = jest.spyOn(Storage.prototype, 'getItem');
    });
    it('saveToStorage updates the Storage by key', () => {
        saveToStorage(VALUES);
        expect(spyRemoveItem).toHaveBeenCalledWith(KEY);
        expect(spySetItem).toHaveBeenCalledWith(KEY, JSON.stringify(VALUES))
    });
    it('getFromStorage returns the item by key if exists', () => {
        const item = getFromStorage();
        expect(spyGetItem).toHaveBeenCalledWith(KEY);
        expect(item).toEqual(VALUES);
    });
})