import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Kinect4 from "../Kinect4/Kinect4";
import '@testing-library/jest-dom';

describe('Link game component', () => {
    test('back should navigate to the game page', () => {
        const history = createMemoryHistory({ initialEntries: ['/kinect4'] });
        render(
            <Router history={history}>
                <Kinect4 />
            </Router>
        );

        expect(history.location.pathname).toBe('/kinect4');
        fireEvent.click(screen.getByText('Back To Home'));
        expect(history.location.pathname).toBe('/games')
    });
});
