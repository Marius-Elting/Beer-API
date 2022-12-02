import './AllBeer.css';
import { Link } from "react-router-dom";
function AllBeer(props) {
    return (
        <div className='A'>
            {props.Beer.map((beers, index) => {
                return (
                    <div key={index} className='AB'>
                        <span className='imgContainer'>
                            <img src={beers.image_url} alt={beers.name}></img>
                        </span>
                        <span className='infoContainer'>
                            <h1> {beers.name}  </h1>
                            <p> {beers.tagline}</p>
                            <p>Producer: {beers.contributed_by}</p>
                            <Link to={`/DetailSite/${index}/${beers.name}`}><button>Details</button></Link>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default AllBeer;