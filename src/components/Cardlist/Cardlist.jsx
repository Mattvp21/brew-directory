import React from 'react';
import Card from '../Card/Card';

const Cardlist = ({beers}) => {
    return (
        <div>
            {
                beers.map((user, i) => {
                 return (<Card 
                        key={i}
                        id={beers[i].id}
                        beer={beers[i].beer}
                        brewery={beers[i].brewery}
                        style={beers[i].style}
                        country={beers[i].country}
                        state={beers[i].state}
                        score={beers[i].score}
                    />)  
                })
            }
        </div>
    )
}

export default Cardlist