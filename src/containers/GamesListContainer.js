import Header from '../components/Header';
import Footer from '../components/Footer';
import PRS from '../components/games/PRS';
import './GamesListContainer.css'

function GamesListContainer() {


    return (
        <>
            <Header />
            <PRS />
            <ul id="games-list">


                <li className="games-list-item" id="game-1">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="overlay">
                        <div className="text">Play Snake</div>
                    </div>
                </li>


                <li className="games-list-item" id="game-2">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="overlay">
                        <div className="text">Play Runner</div>
                    </div>
                </li>
                <li className="games-list-item" id="game-3">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="overlay">
                        <div className="text">Play Breakout</div>
                    </div>
                </li>
                <li className="games-list-item" id="game-4">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="overlay">
                        <div className="text">Play PRS</div>
                    </div>
                </li>
                <li className="games-list-item" id="game-5">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="overlay">
                        <div className="text">Play Frogger</div>
                    </div>
                </li>
                <li className="games-list-item" id="game-6">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="overlay">
                        <div className="text">Play Clicker</div>
                    </div>
                </li>

            </ul>
            <Footer />
        </>
    );
}


export default GamesListContainer;