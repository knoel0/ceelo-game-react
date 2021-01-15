import React from 'react';
import DieBlank from '../images/grey.jpg';
import DieOne from '../images/die1.png';
import DieTwo from '../images/die2.png';
import DieThree from '../images/die3.png';
import DieFour from '../images/die4.png';
import DieFive from '../images/die5.png';
import DieSix from '../images/die6.png';
import './Roll.css';

export default function Roll( {roll} ) {

    const dieImgArr = [];

    if (roll.length === 0) {
        for (let i = 0; i < 3; i++) {
            dieImgArr.push(<img src={DieBlank} className="img" alt='?'></img>)
        }
    } else {
        for (let i = 0; i < roll.length; i++) {
            if (roll[i] === 1) {
                dieImgArr.push(<img src={DieOne} className="img" alt='1'></img>)
            }
            if (roll[i] === 2) {
                dieImgArr.push(<img src={DieTwo} className="img" alt='2'></img>)
            }
            if (roll[i] === 3) {
                dieImgArr.push(<img src={DieThree} className="img" alt='3'></img>)
            }
            if (roll[i] === 4) {
                dieImgArr.push(<img src={DieFour} className="img" alt='4'></img>)
            }
            if (roll[i] === 5) {
                dieImgArr.push(<img src={DieFive} className="img" alt='5'></img>)
            }
            if (roll[i] === 6) {
                dieImgArr.push(<img src={DieSix} className="img" alt='6'></img>)
            }
        }
    }    

    return (
        <div className="img_wrapper">
            {dieImgArr[0]}
            {dieImgArr[1]}
            {dieImgArr[2]}
        </div>
    )
}