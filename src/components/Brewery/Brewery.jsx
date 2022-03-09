import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'

const Brewery = () => {
    let {id, beer, style, brewery, country, state, score} = useParams()
    const [singleBeer, setSingleBeer] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/:id')
        .then(response => response.json())
        .then(data => console.log(data))
      }, []) 
    return (
        <div >
             {  
               <Card 
                        id={id}
                        beer={beer}
                        brewery={brewery}
                        style={style}
                        country={country}
                        state={state}
                        score={score}
                    />
             } 
                
            
        </div>
    )
}

export default Brewery