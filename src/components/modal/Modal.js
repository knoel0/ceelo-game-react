import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal({state}) {

    if (!state.isOpen) { return null }

    return ReactDOM.createPortal (
        <>
        <div className="overlay">
            <div className="main">
                <h1>{state.message}</h1>
            {Object.entries(state.buttons).filter(([k , v]) => v.enabled).map(([k, v]) => (
                <button onClick={v.onClick}>{v.name}</button>
            ))}
            </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}