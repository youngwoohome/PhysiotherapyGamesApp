import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DuckGame from '../Duckhunt/Duckhunt';
import '@testing-library/jest-dom';

// Generic back button tested. The button is the same in all files generally, so we only test it here once
describe('Link game component', () => {
    test('back from minesweeper navigates to the game page', () => {
        const history = createMemoryHistory({ initialEntries: ['/minesweeper'] });
        render(
            <Router history={history}>
                <DuckGame />
            </Router>
        );

        expect(history.location.pathname).toBe('/minesweeper');
        fireEvent.click(screen.getByText('Back To Home'));
        expect(history.location.pathname).toBe('/games')
    });
});