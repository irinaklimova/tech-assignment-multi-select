import {jest, describe, it, expect, beforeAll} from '@jest/globals';
import getData from './common';


const data = ['Category 1', 'Category 2', 'Category 3'];
let spyFetch: any;
let res = {
    ok: true,
    json: () => Promise.resolve({data})
}

describe('Common Api', () => {
    beforeAll(() => {
        spyFetch = jest.spyOn(global, 'fetch');
    });
    it('getData returns data for given url', async () => {
        spyFetch.mockResolvedValue(res);
        const array = await getData('url');
        expect(spyFetch).toHaveBeenCalledWith('url');
        expect(array).toBe(data);
    });
    it('returns the error if occurs', async () => {
        const err = new Error('Error');
        spyFetch.mockRejectedValue(err);
        await expect(getData('url')).rejects.toThrow(err);
    });
})