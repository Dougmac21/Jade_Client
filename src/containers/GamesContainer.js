import Breakout from '../components/Breakout';
import PersonalBest from '../components/PersonalBest';
import SuggestedGames from '../components/SuggestedGames';
import './GamesContainer.css'

function GamesContainer() {



    return (
        <>
            <div className="games-container">
                <PersonalBest className="personal-best" />
                <Breakout className="breakout" />
                <SuggestedGames className="suggested-games" />
            </div>
        </>
    )
};

export default GamesContainer;