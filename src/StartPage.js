import React from 'react'
import { useHistory } from 'react-router-dom'

const STYLES = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(7, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '0px',
    height: '100%'
}

const H1_STYLES = {
    gridArea: '2 / 2 / 4 / 7',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const BUTTON_STYLES = {
    gridArea: '5 / 2 / 7 / 7',
    backgroundColor: 'indianred',
    color: 'white',
    fontSize: '20px',
    padding: '12px 28px',
    borderRadius: '12px',
    border: '2px solid white',
    width: '100%',
    display: 'block',
    margin: '0 auto'
}

export default function StartPage() {

    let history = useHistory();

    return (
        <div style={STYLES}>
            <div style={H1_STYLES}>
                <h1>Cee-Lo</h1>
            </div>
            <button style={BUTTON_STYLES}
                onClick = {() =>
                    history.push({
                        pathname: '/Setup'
                    })
                }    
                >Start
            </button>
        </div>
    );
};
