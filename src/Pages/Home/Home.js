import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

    return (
        <section>
            <article>
                <Link to="/AllBeer"><img src={"https://images.unsplash.com/photo-1592415008610-0091df20779d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} alt="Beer"></img></Link>
                <h2>AllBeers</h2>
                <p>Flüssiges Gold in meinem Becher drin
                    Während du das Zeug aus der Toilette trinkst.
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    G-gieße meine Blumen mit
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    B-B-B-Brauch keinen deutschen Pass, ich hab 'n
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    Mache Waterboarding mit
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    Ich hoff auf dem Mars finden sie–BIER</p>
            </article>
            <article>
                <Link to="/RandomBeer"><img src={"https://images.unsplash.com/photo-1592415008610-0091df20779d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} alt="Beer"></img></Link>
                <h2>Random Beer</h2>
                <p>Flüssiges Gold in meinem Becher drin
                    Während du das Zeug aus der Toilette trinkst.
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    G-gieße meine Blumen mit
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    B-B-B-Brauch keinen deutschen Pass, ich hab 'n
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    Mache Waterboarding mit
                    Bier, Bier, Bier, Bier, Bier
                    Bi-Bi-Bi-Bier, Bier, Bier, Bier
                    Ich hoff auf dem Mars finden sie–BIER</p>
            </article>        </section>
    );
}


export default Home;