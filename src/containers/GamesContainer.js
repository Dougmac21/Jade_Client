import Breakout from '../components/Breakout';
import PersonalBest from '../components/PersonalBest';
import SuggestedGames from '../components/SuggestedGames';
import './GamesContainer.css'
import PlayerController from '../components/PlayerController';

function GamesContainer() {



    return (
        <>
            <div className="games-container">
                <PersonalBest className="personal-best" />
                <Breakout className="breakout" />
                <SuggestedGames className="suggested-games" />
            </div>
                 <PlayerController />
        </>
    )
};

export default GamesContainer;