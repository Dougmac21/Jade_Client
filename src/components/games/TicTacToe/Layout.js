import React from 'react';
import Box from './Box';

const style = {
    border: '4px solid lightblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};


function Layout({ boxes, onClick }) {
    return (
        <div style={style}>
            {boxes.map((box, i) => (
                <Box key={i} value={box} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}

export default Layout;