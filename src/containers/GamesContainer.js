import Breakout from '../components/Breakout';
import PersonalBest from '../components/PersonalBest';
import SuggestedGames from '../components/SuggestedGames';
import './GamesContainer.css'

function GamesContainer() {



    return (
        <>
            <div className="games-container">
                <h2>This is the GamesContainer</h2>
                <Breakout className="breakout" />
                <PersonalBest className="personal-best" />
                <SuggestedGames className="suggested-games" />
            </div>
        </>
    )
};

export default GamesContainer;