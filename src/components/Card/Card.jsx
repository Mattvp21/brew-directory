import React from 'react';
import Link from 'react-router-dom'

const Card = ({id, beer, brewery, style, country, state, score}) => {
    return (
        <div className='tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5'>
            <div>
                <h1>Hello</h1>
                <p>{beer}</p>
                <p>{brewery}</p>
                <p>{style}</p>
                <p>{country}</p>
                <p>{state}</p>
                <p>{score}</p>
                
            </div>
        </div>
    )
}

export default Card