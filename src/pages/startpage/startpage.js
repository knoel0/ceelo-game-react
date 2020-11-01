import React from 'react';
import { useHistory } from 'react-router-dom';
import './startpage.css';

export default function StartPage() {

    let history = useHistory();

    return (
        <div className="container">
            <div className="text-container">
                <h1>CEE-LO</h1>
            </div>
            <button className="startBtn"
                onClick = {() =>
                    history.push({
                        pathname: '/Setup'
                    })
                }
                >START
            </button>
        </div>
    );
};