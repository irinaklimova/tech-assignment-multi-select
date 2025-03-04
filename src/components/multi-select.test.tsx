import {describe, it, expect} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import MultiSelect from '@/components/multi-select';

const items = [
    {
        title: 'title 1',
        checked: false
    },
    {
        title: 'title 2',
        checked: false
    },
    {
        title: 'title 3',
        checked: true
    }
];

let handleApply = jest.fn();

const message = 'message'

describe('MultiSelect component', () => {
    it('renders the items with checked item on the top of the list', () => {
        render(<MultiSelect items={items} handleApply={handleApply} message={message}/>);
        const checkboxes = screen.getAllByTestId('checkbox-input-component');
        expect(checkboxes.length).toBe(3);
        expect(checkboxes[0].textContent).toEqual('title 3');
    });

    it('renders the search input', () => {
        render(<MultiSelect items={items} handleApply={handleApply} message={message}/>);
        const search = screen.getByTestId('search-input-component');
        expect(search).toBeDefined();
    });

    it('renders the Apply button and fires handleApply on click', () => {
        render(<MultiSelect items={items} handleApply={handleApply} message={message}/>);
        const button = screen.getByTestId('apply-button');
        fireEvent.click(button);
        expect(handleApply).toHaveBeenCalled();
    });

    it('renders the message if provided', () => {
        render(<MultiSelect items={items} handleApply={handleApply} message={message}/>);
        const messageSpan = screen.getByText(message);
        expect(messageSpan).toBeDefined();
    })
});