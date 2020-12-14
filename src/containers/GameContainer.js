import Breakout from '../components/games/Breakout';
import PersonalBest from '../components/PersonalBest';
import SuggestedGames from '../components/SuggestedGames';
import './GameContainer.css'
import PlayerController from '../components/PlayerController';

function GameContainer() {



    return (
        <>
            <div className="game-container">
                <PersonalBest className="personal-best" />
                <Breakout className="breakout" />
                <SuggestedGames className="suggested-games" />
            </div>
                 <PlayerController />
        </>
    )
};

export default GameContainer;