import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'

//   function Map() {
//     const [marker, setMarker] = useState(null);

//     return(
//         <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      
//     >
//     <Marker
//         position={{
//             lat: 45.4211,
//             lng:  -75.6903
//         }}
//     />
//      <InfoWindow
//           position={{
//             lat: 45.4211,
//             lng:  -75.6903
//           }}
//         ></InfoWindow>
//     </GoogleMap>
//     )
//   }

// const MapWrapped = withScriptjs(withGoogleMap(Map));


const Brewery = ({match}) => {
    let {id} = useParams()
    const [singleBeer, setSingleBeer] = useState([])

    

    useEffect(() => {
        let isMounted = true;
        fetch(`http://localhost:5000/beers/${id}`)
        .then(response => response.json())
        .then(beer => {
            if(isMounted) {
                setSingleBeer(beer)
            }
            } )
      }, []) 

    return (
        <div>
            <div style={{width: '275px'}} className='card animate__animated animate__fadeIn flex flex-column  tc br3 pa3 ma3 dib bw2 shadow-5'>
            <h1>{singleBeer.name}</h1>
            <p>{singleBeer.brewery_type}</p>
            <p>{singleBeer.style}</p>
            <p>{singleBeer.street}</p>
            <p>{singleBeer.state}</p>
            <p>{singleBeer.country}</p>
            <Link to={'/'}>
                <li style={{listStyle: 'none', 
                textDecoration: 'none'}} 
                className='bg-black white pa2 w-100'>Back</li>
            </Link>
            </div>
            <Map singleBeer={singleBeer}/>
        </div>
        
    )
}

export default Brewery