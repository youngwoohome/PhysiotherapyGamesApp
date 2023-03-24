import React, { Fragment, useEffect, useRef, useState } from 'react';
// import { render } from 'react-Dom';
import gsap from 'gsap';
// import reactDom from 'react-dom';
import "./styles.css";
import { Link } from 'react-router-dom';

const TIME_LIMIT = 30000
const MOLE_SCORE = 100
const NUMBER_OF_MOLES = 5
const POINTS_MULTIPLIER = 0.9
const TIME_MULTIPLIER = 1.25


const generateMoles = amount => new Array(amount).fill().map(() => ({
    speed: gsap.utils.random(0.5, 1),
    delay: gsap.utils.random(1, 6),
    points: MOLE_SCORE
}))

const usePersistentState = (key, initialValue) => {
    const [state, setState] = useState(
        window.localStorage.getItem(key)
            ? JSON.parse(window.localStorage.getItem(key))
            : initialValue
    )
    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])
    return [state, setState]
}

const Moles = ({ children }) => <div className="moles">{children}</div>
const Mole = ({ onWhack, points, delay, speed, pointsMin = 10 }) => {
    const [whacked, setWhacked] = useState(false)
    const bobRef = useRef(null)
    const pointsRef = useRef(points)
    const buttonRef = useRef(null)
    useEffect(() => {
        gsap.set(buttonRef.current, {
            yPercent: 100,
            display: 'block'
        })
        bobRef.current = gsap.to(buttonRef.current, {
            yPercent: 0,
            duration: speed,
            yoyo: true,
            repeat: -1,
            delay: delay,
            repeatDelay: delay,
            onRepeat: () => {
                pointsRef.current = Math.floor(
                    Math.max(pointsRef.current * POINTS_MULTIPLIER, pointsMin)
                )
            },
        })
        return () => {
            if (bobRef.current) bobRef.current.kill()
        }
    }, [pointsMin, delay, speed])


    useEffect(() => {
        if (whacked) {
            pointsRef.current = points
            bobRef.current.pause()
            gsap.to(buttonRef.current, {
                yPercent: 100,
                duration: 0.1,
                onComplete: () => {
                    gsap.delayedCall(gsap.utils.random(1, 3), () => {
                        setWhacked(false)
                        bobRef.current
                            .restart()
                            .timeScale(bobRef.current.timeScale() * TIME_MULTIPLIER)
                    })
                },
            })
        }
    }, [whacked])

    const whack = () => {
        setWhacked(true)
        onWhack(pointsRef.current)
    }
    return (
        <div className="mole-hole">
            <button
                className="mole"
                ref={buttonRef}
                onClick={whack}
            >
                <span className="wack-a-mole-sr-only">Whack</span>
            </button>
        </div>
    )
}
const Score = ({ value }) => <div className='wack-a-mole-info-text'>{`Score: ${value}`}</div>

const Timer = ({ time, interval = 1000, onEnd }) => {
    const [internalTime, setInternalTime] = useState(time)
    const timerRef = useRef(time)
    const timeRef = useRef(time)
    useEffect(() => {
        if (internalTime === 0 && onEnd) {
            onEnd()
        }
    }, [internalTime, onEnd])
    useEffect(() => {
        timerRef.current = setInterval(
            () => setInternalTime((timeRef.current -= interval)),
            interval
        )
        return () => {
            clearInterval(timerRef.current)
        }
    }, [interval])
    return <div className='wack-a-mole-info-text'>{`Time: ${internalTime / 1000}s`}</div>
}

const Game = () => {
    const [playing, setPlaying] = useState(false)
    const [finished, setFinished] = useState(false)
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = usePersistentState('whac-a-mole-hi', 0)
    const [newHighScore, setNewHighScore] = useState(false)
    const [moles, setMoles] = useState(generateMoles(NUMBER_OF_MOLES))

    const onWhack = points => setScore(score + points)

    const endGame = () => {
        setPlaying(false)
        setFinished(true)
        if (score > highScore) {
            setHighScore(score)
            setNewHighScore(true)
        }
    }

    const startGame = () => {
        setScore(0)
        setPlaying(true)
        setFinished(false)
        setNewHighScore(false)
    }

    return (
        <div className='wack-a-mole-body'>
            <Fragment>
                {!playing && !finished &&
                    <Fragment>
                        <h1>Whac a Mole</h1>
                        <button className='wack-a-mole-button' onClick={startGame}>Start Game</button>
                        <br></br>
                        <br></br>
                        <button className="back btn"><Link to="/games">Back To Home</Link></button>
                    </Fragment>
                }
                {playing &&
                    <Fragment>
                        <button
                            className="wack-a-mole-button end-game"
                            onClick={endGame}
                        >
                            End Game
                        </button>
                        <button id="wack-a-mole-exit" className="back btn"><Link to="/games">Back To Home</Link></button>
                        <div className="wack-a-mole-info">
                            <Score value={score} />
                            <Timer
                                time={TIME_LIMIT}
                                onEnd={endGame}
                            />
                        </div>
                        <Moles>
                            {moles.map(({ delay, speed, points }, index) => (
                                <Mole
                                    key={index}
                                    onWhack={onWhack}
                                    points={points}
                                    delay={delay}
                                    speed={speed}
                                />
                            ))}
                        </Moles>
                    </Fragment>
                }
                {finished &&
                    <Fragment>
                        {newHighScore && <div className="wack-a-mole-info-text">NEW High Score!</div>}
                        <Score value={score} />
                        <button className='wack-a-mole-button' onClick={startGame}>Play Again</button>
                        <button  className="back btn"><Link to="/games">Back To Home</Link></button>
                    </Fragment>
                }
            </Fragment>
        </div>
    )
}

export default function WackamoleApp() {
    return <Game />;
}