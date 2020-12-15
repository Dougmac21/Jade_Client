import React, { useState } from 'react';
import { checkWinner } from './Logic';
import Layout from './Layout';


const styles = {
    width: '200px',
    margin: '20px auto',
};

const pStyle = {
    color: 'green'
}


function TicTacToe({ value, onClick }) {

    const [layout, setLayout] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = checkWinner(layout)


    const handleClick = (i) => {
        const layoutState = [...layout];
        // if user clicks on occupied box or if game is won, then return
        if (winner || layoutState[i]) return;
        // put an x or O in the clicked box
        layoutState[i] = xIsNext ? 'X' : 'O';
        setLayout(layoutState);
        setXisNext(!xIsNext);
    }



    return (
        <React.Fragment>
            <Layout boxes={layout} onClick={handleClick} />
            <div style={styles}>
                <p style={pStyle}>{winner ? 'Winner: ' + winner : 'Next Player '
                    + (xIsNext ? 'X' : 'O')}
                </p>

            </div>
        </React.Fragment>
    )
};

export default TicTacToe;