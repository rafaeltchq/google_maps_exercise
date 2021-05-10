import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SearchBox from '../components/Searcher/SearchBox';

const setup = () => {
    const utils = render(<SearchBox />)
    const input = utils.getAllByPlaceholderText("Buscar...")
    return {
        input,
        ...utils,
    }
}

test('It should show a suggestion', () => {
    const { input } = setup()
  fireEvent.change(input, { target: { value: 'Barcel' } })
  expect(input.value).toBe('Barcelona')
})