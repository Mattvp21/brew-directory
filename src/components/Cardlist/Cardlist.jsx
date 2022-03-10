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
                        beer={beers[i].name}
                        brewery={beers[i].brewery_type}
                        style={beers[i].style}
                        state={beers[i].state}
                        country={beers[i].country}
                    />)  
                })
            }
        </div>
    )
}

export default Cardlist