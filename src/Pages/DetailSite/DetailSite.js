import './DetailSite.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DetailsSite(props) {
    let params = useParams();

    let BeerArray = props.Beer;
    const [clickedBeer, setclickedBeer] = useState([]);

    useEffect(() => {
        const randomBeer = BeerArray[params.id];
        setclickedBeer(BeerArray[params.id]);
        if (randomBeer === undefined) {
            setclickedBeer([]);
        }
    }, [BeerArray]);

    return (<section>

        <div>
            <img src={clickedBeer.image_url} alt={clickedBeer.name}></img>
            <h1>{clickedBeer.name}</h1>
            <p>{clickedBeer.tagline}</p>
            <p>First Brewed:<span>{clickedBeer.first_Brewed}</span></p>
            <p>Attenuation level:<span>{clickedBeer.attenuation_level}</span></p>
            <p>{clickedBeer.description}</p>
            <Link to="/AllBeer">Back to List</Link>
        </div>

    </section>
    );
}

export default DetailsSite;