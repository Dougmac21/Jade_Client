import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/GamesListContainer.css'

function GamesListContainer() {


    return (
        <>
            <div className = 'games-list-container'>
            <Header />
            <div > 
            <ul id="games-list">

                <li className="games-list-item" id="game-1">
                    <a href="http://localhost:3000/games/snake">
                        <div className="game-list-overlay">

                            <p>Play Snake!</p>

                        </div>
                    </a>
                </li>

                <li className="games-list-item" id="game-2">
                <a href="http://localhost:3000/games/PRS">
                        <div className="game-list-overlay">
                            <p>Play Paper Rock Scissors!</p>
                        </div>
                    </a>
                </li>


                <li className="games-list-item" id="game-3">
                    <div className="game-list-overlay">
                        <p>Play Breakout!</p>
                    </div>
                </li>


                <li className="games-list-item" id="game-4">
                    <div className="game-list-overlay">
                        <p>Play Pacman!</p>
                    </div>
                </li>


                <li className="games-list-item" id="game-5">
                    <div className="game-list-overlay">
                        <p>Play Space Invaders!</p>
                    </div>
                </li>


                <li className="games-list-item" id="game-6">
                    <div className="game-list-overlay">
                        <p>Play Clicker!</p>
                    </div>
                </li>

            </ul>
            </div>
            <Footer />
            </div>
        </>
    );
}


export default GamesListContainer;