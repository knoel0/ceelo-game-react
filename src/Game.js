import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Player from './Player';
import Modal from './Modal';

const GAME_STYLE = {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'lightcoral'
};

export default function Game() {

    const location = useLocation();
    let history = useHistory();

    const [modalState, setModalState] = useState({
        isOpen: false,
        message: ""
    })

    const players = [];

    const clearState = {
        playerIds: null,
        playerNames: null,
        scores: null,
        winner: null,
        activePlayer: null,
        inCurrentGame: null
    }

    const initialState = {
        playerIds: location.state.ids,
        playerNames: location.state.names,
        scores: location.state.scores,
        winner: location.state.winner,
        activePlayer: location.state.activePlayer,
        inCurrentGame: location.state.inCurrentGame
    }

    const [gameState, setGameState] = useState({
        playerIds: location.state.ids,
        playerNames: location.state.names,
        scores: location.state.scores,
        winner: location.state.winner,
        activePlayer: location.state.activePlayer,
        inCurrentGame: location.state.inCurrentGame
    })

    const allEqual = arr => arr.every(v => v === arr[0]);

    function ifWinner(winner) {
        return winner === true;
    }

    function ifPlayerEliminated(inCurrentGame) {
        return inCurrentGame === false
    }
    
    function if_456(score) {
        return score === 13;
    }

    function if_123(score) {
        return score === -1;
    }

    function allPlayed(score) {
        return score !== undefined;
    }

    function tieAmongWinners(scores)  {
        let scoresCopy = [...(scores)];
        const sortedArr = scoresCopy.sort(function(a, b) {return b - a});
        if (sortedArr[0] > sortedArr[1]) { 
            return false;
        } else {
            return true;
        }
    }

    useEffect(() => {
        if (gameState.scores.some(if_456)) {
            console.log('456');
            
            const index = gameState.scores.indexOf(13);
            let winnerCopy = [...gameState.winner];
            let winnerCopyItem = winnerCopy[index];
            winnerCopyItem = true;
            winnerCopy[index] = winnerCopyItem;
            setGameState({
                ...gameState,
                winner: winnerCopy
            });
        }  if (gameState.scores.some(if_123)) {
            console.log('123');

            const index = gameState.scores.indexOf(-1);
            let inCurrentGameCopy = [...gameState.inCurrentGame];
            let inCurrentGameCopyItem = inCurrentGameCopy[index];
            inCurrentGameCopyItem = false;
            inCurrentGameCopy[index] = inCurrentGameCopyItem;
            setGameState({
                ...gameState,
                inCurrentGame: inCurrentGameCopy
            });
        } if (gameState.scores.every(allPlayed)) {
            console.log('all played');
            if (allEqual(gameState.scores)) {
                console.log('all equal');
                
                setGameState({
                    playerIds: initialState.playerIds,
                    playerNames: initialState.playerNames,
                    scores: initialState.scores,
                    winner: initialState.winner,
                    activePlayer: initialState.activePlayer,
                    inCurrentGame: initialState.inCurrentGame
                });
            } else if (tieAmongWinners(gameState.scores)) {
                console.log('tie among winners');
                
                const winningScore = Math.max(...(gameState.scores));
                let indexArr = [];
                for (let i = 0; i < gameState.scores.length; i++) {
                    if (gameState.scores[i] !== winningScore) {
                        indexArr.push(i);
                    }
                }
                let inCurrentGameCopy = [...gameState.inCurrentGame];
                let activePlayerCopy = [...gameState.activePlayer];
                for (let i = 0; i < indexArr.length; i++) {
                    let inCurrentGameCopyItem = inCurrentGameCopy[indexArr[i]];
                    let activePlayerCopyItem = activePlayerCopy[indexArr[i]];
                    inCurrentGameCopyItem = false;
                    activePlayerCopyItem = false;
                    inCurrentGameCopy[indexArr[i]] = inCurrentGameCopyItem;
                    activePlayerCopy[indexArr[i]] = activePlayerCopyItem;
                }
                setGameState({
                    ...gameState,
                    scores: initialState.scores,
                    activePlayer: activePlayerCopy,
                    inCurrentGame: inCurrentGameCopy
                });
            } else {
                console.log('winner from gameplay');

                const winningScore = Math.max(...(gameState.scores));
                const winningScoreIndex = gameState.scores.indexOf(winningScore);
                let winnerCopy = [...gameState.winner];
                let winnerCopyItem = winnerCopy[winningScoreIndex];
                winnerCopyItem = true;
                winnerCopy[winningScoreIndex] = winnerCopyItem;
                setGameState({
                    ...gameState,
                    winner: winnerCopy
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameState.scores])

    useEffect(() => {
        if (gameState.winner.some(ifWinner)) {
            const index = gameState.winner.indexOf(true);
            setModalState({
                isOpen: true,
                message: "" + gameState.playerNames[index] + " Won!"
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameState.winner])

    useEffect(() => {
        if (gameState.inCurrentGame.some(ifPlayerEliminated)) {
            const index = gameState.inCurrentGame.indexOf(false);
            setModalState({
                isOpen: true,
                message: "" + gameState.playerNames[index] + " has been eliminated."
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameState.inCurrentGame])

    const handleClick = (id, dice) => {
        
        const sortedDice = dice.sort(function (a, b) {
            return a - b
        });
        if (sortedDice.includes(4) && sortedDice.includes(5) && sortedDice.includes(6)) {
            updateGame(id, 13, false);
        } else if (sortedDice.includes(1) && sortedDice.includes(2) && sortedDice.includes(3)) {
            updateGame(id, -1, false)
        } else if (arrayEquals(sortedDice, [6, 6, 6])) {
            updateGame(id, 12, false);
        } else if (arrayEquals(sortedDice, [5, 5, 5])) {
            updateGame(id, 11, false);
        } else if (arrayEquals(sortedDice, [4, 4, 4])) {
            updateGame(id, 10, false);
        } else if (arrayEquals(sortedDice, [3, 3, 3])) {
            updateGame(id, 9, false);
        } else if (arrayEquals(sortedDice, [2, 2, 2])) {
            updateGame(id, 8, false);
        } else if (arrayEquals(sortedDice, [1, 1, 1])) {
            updateGame(id, 7, false);
        } else if (sortedDice[0] === sortedDice[1]) {
            updateGame(id, sortedDice[2], false);
        } else if (sortedDice[1] === sortedDice[2]) {
            updateGame(id, sortedDice[0], false);
        } else if (sortedDice[0] === sortedDice[2]) {
            updateGame(id, sortedDice[1], false);
        }

        function updateGame (id, score, active) {
            
            let scoresCopy = [...gameState.scores];
            let scoresCopyItem = scoresCopy[id];
            scoresCopyItem = score;
            scoresCopy[id] = scoresCopyItem;

            let activePlayerCopy = [...gameState.activePlayer];
            let activePlayerCopyItem = activePlayerCopy[id];
            if (activePlayerCopyItem !== active) {
                activePlayerCopyItem = active;
                activePlayerCopy[id] = activePlayerCopyItem
                if ((id + 1) !== activePlayerCopy.length) {
                    activePlayerCopy[id + 1] = true;
                }
            }
           
            setGameState({
                ...gameState,
                activePlayer: activePlayerCopy,
                scores: scoresCopy
            });
        }

        function arrayEquals(a, b) {
            return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
        }
    }

    for (let i = 0; i < gameState.playerNames.length; i++) {
        if (gameState.inCurrentGame[i] === true) {
            players.push(
                <Player 
                    id={gameState.playerIds[i]}
                    name={gameState.playerNames[i]}
                    score={gameState.scores[i]}
                    winner={gameState.winner[i]}
                    active={gameState.activePlayer[i]}
                    inCurrentGame={gameState.inCurrentGame[i]}
                    clickHandler={handleClick}
                />
            )
        }
    }

    return (       
        <>
            <div style = {GAME_STYLE}>
                {players}
            </div>
            <Modal
                open={modalState.isOpen}
                message={modalState.message}
                onPlayAgain={() => {
                    setModalState({
                        isOpen: false,
                        message: ""
                    });
                    setGameState(initialState);
                }}
                onNewGame={() => {
                    setModalState({
                        isOpen: false,
                        message: ""
                    });
                    setGameState(clearState);
                }}
                onQuit={() => {
                    setModalState({
                        isOpen: false,
                        message: ""
                    });
                    history.push({
                        pathname: '/StartPage'
                    });
                }}
            />
        </>    
    )
}