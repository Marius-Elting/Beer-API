import './RandomBeer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function RandomBeer(props) {
    console.log(props);
    let BeerArray = props.Beer;
    const [pickedBeer, setPickedBeer] = useState([]);

    useEffect(() => {
        let random = Math.floor(Math.random() * 49);
        const randomBeer = BeerArray[random];
        setPickedBeer(BeerArray[random]);
        if (randomBeer === undefined) {
            setPickedBeer([]);
        }
    }, [BeerArray]);

    return (<section>


        <div>
            <img src={pickedBeer.image_url} alt={pickedBeer.name}></img>
            <h1>{pickedBeer.name}</h1>
            <p>{pickedBeer.tagline}</p>
            <p>First Brewed:<span>{pickedBeer.first_Brewed}</span></p>
            <p>Attenuation level:<span>{pickedBeer.attenuation_level}</span></p>
            <p>{pickedBeer.description}</p>
            <Link to="/">Back to Home</Link>
        </div>

    </section>
    );

}

export default RandomBeer;