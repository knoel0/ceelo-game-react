import React, { useState, useEffect } from 'react'
import Roll from '../roll/Roll';
import './Player.css';

export default function Player( {id, name, score, winner, active, inCurrentGame, clickHandler, rerender} ) {

    const [STYLE, setSTYLE] = useState({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '0px 20px',
        textAlign: 'center',
        backgroundColor: 'lightcoral',
        border: '1px solid white',
        width: '100%'
    })

    const [diceRoll, setDiceRoll] = useState([]);

    function rollDice() {
        let diceTemp = [];
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        setDiceRoll(diceTemp);
    }

    useEffect(() => {
        if (rerender || !rerender) {
            setDiceRoll([]);
            setSTYLE({
                ...STYLE,
                border: '1px solid white'
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rerender])

    useEffect(() => {
        clickHandler(id, diceRoll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [diceRoll])

    useEffect(() => {
        if (!inCurrentGame) {
            setSTYLE({
                ...STYLE,
                border: '2px solid red'
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inCurrentGame])

    useEffect(() => {
        if (inCurrentGame && winner) {
            setSTYLE({
                ...STYLE,
                border: '2px solid green'
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [winner])
    
    return (
        <div style={STYLE}>
            <h1 className="name">{name}</h1>
            <h3 className="score">{score}</h3>
            <Roll roll={diceRoll} />
            <button className="btn"
                onClick={rollDice}
                disabled={!active}
                >Roll
            </button>
        </div>
    )
}