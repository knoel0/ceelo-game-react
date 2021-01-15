import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Setup.css';

export default function Setup() {

    let history = useHistory();

    const [numPlayers, setNumPlayers] = useState(3)
    const numFields = numPlayers

    const [inputs, setInput] = useState([])
    
    const handleInputChange = (e) => setInput({
        ...inputs,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const clickHandler = (num) => {
        setNumPlayers(num);
        document.querySelector('form').reset();
        setInput([]);
    }

    function submitHandler() {
        const idInit = [];
        const scoresInit = [];
        const winnerInit = [];
        const activePlayerInit = [];
        const inCurrentGameInit = [];

        for (var i = 0; i < Object.keys(inputs).length; i++) {
            idInit.push(i);
            scoresInit.push(undefined);
            winnerInit.push(false);
            if (i === 0) {
                activePlayerInit.push(true);
            } else {
            activePlayerInit.push(false);
            }
            inCurrentGameInit.push(true);
        }
        
        history.push({
            pathname: '/Game',
            state: { 
                ids: idInit,
                names: Object.values(inputs),
                scores: scoresInit,
                winner: winnerInit,
                activePlayer: activePlayerInit,
                inCurrentGame: inCurrentGameInit
            }
        });
    }

    const fields = []

    for (let i = 0; i < numFields; i++) {
        fields.push(<input
            type="text"
            required
            name={"Player " + [i + 1].toString()}
            onChange={handleInputChange}
            placeholder={"Player " + [i + 1].toString()}
        />);
    }

    return (
        <div className="container">
            <div className="text-container">
                <h1>Select the number of players:</h1>
            </div>
            <div className="button-container">
                <button onClick={() => clickHandler(3)}>3</button>
                <button onClick={() => clickHandler(4)}>4</button>
                <button onClick={() => clickHandler(5)}>5</button>
            </div>
            <div className="form-container">
                <form autocomplete="off" onSubmit={submitHandler}>
                    {fields}
                    <button type="submit">Game On!</button>
                </form>
            </div>
        </div>
    )
}