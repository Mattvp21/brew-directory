import React from 'react';
import 'animate.css';
import {Link} from 'react-router-dom'

const Card = ({id, beer, brewery, style, country, state, score}) => {
    
    return (
        <div style={{width: '275px'}} className='card animate__animated animate__fadeIn tc  br3 pa3 ma3 dib bw2 shadow-5'>
            <div>
               
                <h1>{beer}</h1>
                <p>{id}</p>
                <p>{brewery}</p>
                <p>{style}</p>
                <p>{country}</p>
                <p>{state}</p>
                <p>{score}</p>
                <Link to={'/beers/' + id}>
                <li style={{listStyle: 'none'}} className='bg-black white pa2 w-100'>More Info</li>
                </Link>
                
            </div>
        </div>
    )
}

export default Card