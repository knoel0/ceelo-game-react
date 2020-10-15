import React from 'react';
import DieBlank from './images/grey.jpg';
import DieOne from './images/die1.png';
import DieTwo from './images/die2.png';
import DieThree from './images/die3.png';
import DieFour from './images/die4.png';
import DieFive from './images/die5.png';
import DieSix from './images/die6.png';

const IMG_STYLE = {
    height: '100%',
    width: '33%'
}

const IMG_WRAPPER_STYLE = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}

export default function Roll( {roll} ) {

    const dieImgArr = [];

    if (roll.length === 0) {
        for (let i = 0; i < 3; i++) {
            dieImgArr.push(<img src={DieBlank} style={IMG_STYLE} alt='?'></img>)
        }
    } else {
        for (let i = 0; i < roll.length; i++) {
            if (roll[i] === 1) {
                dieImgArr.push(<img src={DieOne} style={IMG_STYLE} alt='1'></img>)
            }
            if (roll[i] === 2) {
                dieImgArr.push(<img src={DieTwo} style={IMG_STYLE} alt='2'></img>)
            }
            if (roll[i] === 3) {
                dieImgArr.push(<img src={DieThree} style={IMG_STYLE} alt='3'></img>)
            }
            if (roll[i] === 4) {
                dieImgArr.push(<img src={DieFour} style={IMG_STYLE} alt='4'></img>)
            }
            if (roll[i] === 5) {
                dieImgArr.push(<img src={DieFive} style={IMG_STYLE} alt='5'></img>)
            }
            if (roll[i] === 6) {
                dieImgArr.push(<img src={DieSix} style={IMG_STYLE} alt='6'></img>)
            }
        }
    }    

    return (
        <div style = {IMG_WRAPPER_STYLE}>
            {dieImgArr[0]}
            {dieImgArr[1]}
            {dieImgArr[2]}
        </div>
    )
}