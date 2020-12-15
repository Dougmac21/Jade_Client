import Breakout from '../components/games/Breakout';
import PersonalBest from '../components/PersonalBest';
import SuggestedGames from '../components/SuggestedGames';
<<<<<<< HEAD
import PlayerController from '../components/PlayerController';
import '../styles/GameContainer.css';
=======
import './GameContainer.css'
>>>>>>> ad0f05ad752eadb813c9dca8591209bd03859ea8

function GameContainer() {



    return (
        <>
            <div className="game-container">
                <PersonalBest className="personal-best" />
                <Breakout className="breakout" />
                <SuggestedGames className="suggested-games" />
            </div>
<<<<<<< HEAD
            <PlayerController />
=======
>>>>>>> ad0f05ad752eadb813c9dca8591209bd03859ea8
        </>
    )
};

export default GameContainer;