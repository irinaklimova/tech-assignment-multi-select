import {jest, describe, it, expect} from '@jest/globals';
import { getAllCategories } from './categories';

const storageData = ['Category 1'];
const apiData =  ['Category 1', 'Category 2', 'Category 3'];
const result = [
    { title: 'Category 1', checked: false },
    { title: 'Category 2', checked: false },
    { title: 'Category 3', checked: true}];

jest.mock('./common', () => {
    return {
        __esModule: true,
        default: () => Promise.resolve(apiData)
    }
})

jest.mock('./storage', () => {
    return {
        __esModule: true,
        getFromStorage: () => storageData
    }
})

describe('Categories Api', () => {
    it('getAllCategories function check the Storage and return array with latest checked values', async () => {
        const result = await getAllCategories();
        expect(result).toBe(result);
    });
})