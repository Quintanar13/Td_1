import React, {useState} from 'react';

const Counter = () => {
    const [rr, contar] = useState(0);
    
    return (
        <>
            <h1  style={{color: "black", textAlign: 'center'}}>Tally counter: {rr}</h1>
            <button onClick={() => contar(rr+1)}>+</button>
            <button onClick={() => contar(rr-1)}>-</button>
            <button onClick={() => contar(rr*2)}>x2</button>
        </>
    )
    
}

export default Counter;