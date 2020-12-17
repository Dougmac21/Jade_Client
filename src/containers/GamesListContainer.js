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
                    <div className="game-list-overlay">
                        <a href="http://localhost:3000/games/snake"></a>
                        <p >Play Snake!</p>
                    </div>
                </li>


                <li className="games-list-item" id="game-2">
                    <div className="game-list-overlay">
                        <a href="http://localhost:3000/games/PRS"></a>
                        <p>Play Paper Rock Scissors!</p>
                    </div>
                </li>


                <li className="games-list-item" id="game-3">
                    {/* <div className="game-list-overlay"> */}
                        <div className="game-list-overlay">Play Breakout!</div>
                    {/* </div> */}
                </li>


                <li className="games-list-item" id="game-4">
                    <div className="game-list-overlay">
                        <div className="text">Play Pacman!</div>
                    </div>
                </li>


                <li className="games-list-item" id="game-5">
                    <div className="game-list-overlay">
                        <div className="text">Play Space Invaders!</div>
                    </div>
                </li>


                <li className="games-list-item" id="game-6">
                    <div className="game-list-overlay">
                        <div className="text">Play Clicker!</div>
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