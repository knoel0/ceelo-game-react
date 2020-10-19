import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MAIN_STYLE = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(7, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '0px',
    height: '100%'
}

const H1_NUMBER_STYLE = {
    gridArea: '2 / 2 / 3 / 7',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const BUTTONGROUP_STYLE = {
    gridArea: '3 / 2 / 4 / 7',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '20px'
}

const BUTTON_STYLE_NUMBER = {
    backgroundColor: 'indianred',
    color: 'white',
    fontSize: '20px',
    padding: '12px 28px',
    borderRadius: '10px',
    border: '2px solid white'
}

const BUTTON_STYLE_SUBMIT = {
    backgroundColor: 'indianred',
    color: 'white',
    fontSize: '20px',
    padding: '12px 20px',
    borderRadius: '5px',
    border: '2px solid white'
}

const FORM_WRAPPER_STYLE = {
    gridArea: '4 / 2 / 7 / 7',
    padding: '10px 30px 0px'
}

const FORM_STYLE = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}

const INPUT_STYLE = {
    padding: '12px 20px',
    border: '2px solid indianred',
    borderRadius: '5px'
}

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
            style={INPUT_STYLE}
        />);
    }

    return (
        <div style={MAIN_STYLE}>
        <div style={H1_NUMBER_STYLE}>
            <h1>Select the number of players:</h1>
        </div>
        <div style={BUTTONGROUP_STYLE}>
            <button style={BUTTON_STYLE_NUMBER} onClick={() => clickHandler(3)}>3</button>
            <button style={BUTTON_STYLE_NUMBER} onClick={() => clickHandler(4)}>4</button>
            <button style={BUTTON_STYLE_NUMBER} onClick={() => clickHandler(5)}>5</button>  
        </div>
        <div style={FORM_WRAPPER_STYLE}>
            <form style={FORM_STYLE} autocomplete="off" onSubmit={submitHandler}>
                {fields}
                <button style={BUTTON_STYLE_SUBMIT} type = "submit">Game On!</button>
            </form>
        </div>
        </div>
    )
}