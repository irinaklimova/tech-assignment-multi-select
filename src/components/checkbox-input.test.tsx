import {describe, it, expect, jest} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import CheckboxInput from './checkbox-input';
import { Category } from '@/types/category';

const uncheckedCategory: Category = {
    title: 'Category 1',
    checked: false
}

const checkedCategory: Category = {
    title: 'Category 2',
    checked: true
}

let handleCheck = jest.fn();

describe('CheckboxInput component', () => {
    it('renders checkbox with title of item', () => {
        render(<CheckboxInput item={uncheckedCategory} handleCheck={handleCheck}/>);
        const label = screen.getByTestId('checkbox-label');
        expect(label.textContent).toBe(uncheckedCategory.title);
    });
    it('renders checkbox with unchecked state', () => {
        render(<CheckboxInput item={uncheckedCategory} handleCheck={handleCheck}/>);
        const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
        expect(checkbox.checked).toBeFalsy();
    });
    it('renders checkbox with checked state', () => {
        render(<CheckboxInput item={checkedCategory} handleCheck={handleCheck}/>);
        const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
        expect(checkbox.checked).toBeTruthy();
    });
    it('handles the change of the checkbox value', () => {
        render(<CheckboxInput item={checkedCategory} handleCheck={handleCheck}/>);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(handleCheck).toHaveBeenCalledTimes(1);
    });
});