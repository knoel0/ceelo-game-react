import React, { useState, useEffect } from 'react'
import Roll from './Roll';

const NAME_STYLE = {
    color: 'white'
}

const SCORE_STYLE = {
    color: 'indianred',
    fontSize: '30px'
}

const BUTTON_STYLE = {
    backgroundColor: 'indianred',
    color: 'white',
    fontSize: '20px',
    padding: '12px 28px',
    borderRadius: '12px',
    border: '2px solid white'
}

export default function Player( {id, name, score, winner, active, inCurrentGame, clickHandler} ) {

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

    const [dice, setDice] = useState([])

    function rollDice() {
        let diceTemp = [];
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        setDice(diceTemp);
    }

    useEffect(() => {
        clickHandler(id, dice);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dice])

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
        <div style = {STYLE}>
            <h1 style={NAME_STYLE}>{name}</h1>
            <h3 style={SCORE_STYLE}>{score}</h3>
            <Roll roll = {dice} />
            <button style={BUTTON_STYLE}
                onClick = {rollDice}
                disabled = {!active}
                >Roll
            </button>
        </div>
    )
}