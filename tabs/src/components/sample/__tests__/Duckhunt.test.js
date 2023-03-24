import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DuckGame from '../Duckhunt/Duckhunt';
import '@testing-library/jest-dom';


// Back button has separate classes and IDs, so a separate test is used
describe('Link game component', () => {
    test('back should navigate to the game page', () => {
        const history = createMemoryHistory({ initialEntries: ['/duckhunt'] });
        render(
            <Router history={history}>
                <DuckGame />
            </Router>
        );

        expect(history.location.pathname).toBe('/duckhunt');
        fireEvent.click(screen.getByText('Back To Home'));
        expect(history.location.pathname).toBe('/games')
    });
});