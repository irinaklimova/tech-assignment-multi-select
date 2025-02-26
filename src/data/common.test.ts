import {jest, describe, it, expect, beforeAll} from '@jest/globals';
import getData from './common';


const data = ['Category 1', 'Category 2', 'Category 3'];
let spyFetch: any;
let res = {
    ok: true,
    json: () => Promise.resolve({data})
}

describe('Categories Api', () => {
    beforeAll(() => {
        spyFetch = jest.spyOn(global, 'fetch');
    })
    it('returns array of Categories', async () => {
        spyFetch.mockResolvedValue(res);
        const array = await getData('url');
        expect(array[0]).toBe('Category 1');
    });
    it('returns the error', async () => {
        const err = new Error('Error');
        spyFetch.mockRejectedValue(err);
        await expect(getData('url')).rejects.toThrow(err);
    });
})