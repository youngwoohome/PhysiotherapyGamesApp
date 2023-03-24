import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Games } from '../Games';
import { createMemoryHistory } from 'history';
import { Welcome } from '../Welcome';
import '@testing-library/jest-dom';

describe('Link component', () => {
    test('should navigate to the correct component', () => {
        render(
            <MemoryRouter>
                <Link to="/games">Go to Games</Link>
                <Route exact path="/games" component={Games} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Go to Games'));

        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument();
    });
});

describe('Link paths', () => {
    test('should navigate to the correct path without real browser environment', () => {
        const history = createMemoryHistory({ initialEntries: ['/home'] });
        render(
            <Router history={history}>
                <Welcome />
            </Router>
        );

        expect(history.location.pathname).toBe('/home');
        fireEvent.click(screen.getByText('Get Started'));
        expect(history.location.pathname).toBe('/games');
    });
});