import {describe, it, expect, jest} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import SearchInput from './search-input';

const search = 'search';

let setSearch = jest.fn();

describe('SearchInput component', () => {
    it('renders input component with search input value', () => {
        render(<SearchInput search={search} setSearch={setSearch}/>);
        const input = screen.getByTestId<HTMLInputElement>('search-input');
        expect(input.value).toBe(search);
    });

    it('handles the change of the search input value', () => {
        render(<SearchInput search={search} setSearch={setSearch}/>);
        const input = screen.getByTestId('search-input');
        fireEvent.change(input,  {target: {value: 'new search'}});
        expect(setSearch).toHaveBeenCalledWith('new search');
    });
});