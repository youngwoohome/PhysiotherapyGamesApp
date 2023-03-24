import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Games } from '../Games';
import { ReactDOM } from 'react';
import { createMemoryHistory } from 'history';

// import FlappyApp from "../FlappyBird/FlappyBird";
// import Kinect4 from "../Kinect4/Kinect4";
// import Duckgame from "../Duckhunt/Duckhunt";
// import Minesweeper from "../Minesweeper/Game/Minesweeper";
// import SnakesAndLadders from "../SnakesandLadders/App";
// import Solitaire from "../Solitaire/Solitaire"
// import SnakeGame from "../Snake/App";
// import TetrisApp from "../Tetris/Components/App";
// import WackamoleApp from "../WackaMole/App";

import '@testing-library/jest-dom';
// import { renderIntoDocument } from 'react-dom/test-utils';

describe('Link welcome component', () => {
    test('back should navigate to the welcome page', () => {
        // Setting up completely random dummy route environment
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history = { history }>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        // Emulating click
        fireEvent.click(screen.getByText('Back To Start'));
        expect(history.location.pathname).toBe('/welcome')
    });
});


// All play now buttons use same logic, test each one separately just to make sure theres no conflicts 
// as all the buttons are on the same page
//The first occurrence of this button links to tictactoe
describe('Link game components', () => {
    test('should navigate to tictactoe', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[0]);
        expect(history.location.pathname).toBe('/tictactoe')
    });
});


describe('Link game components', () => {
    test('should navigate to snake', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[1]);
        expect(history.location.pathname).toBe('/snake')
    });
});


describe('Link game components', () => {
    test('should navigate to whackamole', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[2]);
        expect(history.location.pathname).toBe('/wackamole')
    });
});


describe('Link game components', () => {
    test('should navigate to tetris', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[3]);
        expect(history.location.pathname).toBe('/tetris')
    });
});


describe('Link game components', () => {
    test('should navigate to minesweeper', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[4]);
        expect(history.location.pathname).toBe('/minesweeper')
    });
});


describe('Link game components', () => {
    test('should navigate to kinect 4', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[5]);
        expect(history.location.pathname).toBe('/kinect4')
    });
});


describe('Link game components', () => {
    test('should navigate to flappy bird', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[6]);
        expect(history.location.pathname).toBe('/flappybird')
    });
});


describe('Link game components', () => {
    test('should navigate to duck hunt', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[7]);
        expect(history.location.pathname).toBe('/duckhunt')
    });
});


describe('Link game components', () => {
    test('should navigate to snakes and ladders', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[8]);
        expect(history.location.pathname).toBe('/snakesandladders')
    });
});


describe('Link game components', () => {
    test('should navigate to reversi', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Play Now')[9]);
        expect(history.location.pathname).toBe('/reversi')
    });
});



// MODAL TESTING
describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
  document.body.appendChild(portalRoot)
}
    test('assert tictactoe modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[0]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});


describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert snake modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[1]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});

describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert wackamole modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[2]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});

describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert tetris modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[3]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});


describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert minesweeper modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[4]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});

describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert kinect 4 modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[5]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});


describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert flappybird modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[6]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});


describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert duckhunt modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[7]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});


describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert snakesandladders modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[8]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});


describe('Link game components', () => {
    let portalRoot = document.getElementById("portal")
    if (!portalRoot) {
        portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', "portal"),
            document.body.appendChild(portalRoot)
    }
    test('assert reversi modal is launched', () => {
        const history = createMemoryHistory({ initialEntries: ['/games'] });
        render(
            <Router history={history}>
                <Games />
            </Router>
        );

        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getAllByText('Game Info')[9]);
        expect(history.location.pathname).toBe('/games');
        fireEvent.click(screen.getByText('Close X')); // Asserts that the modal popup is showing and rendered
        expect(screen.getByText('Choose From the Following Selection Of Games')).toBeInTheDocument(); // Game page has re rendered
    });
});