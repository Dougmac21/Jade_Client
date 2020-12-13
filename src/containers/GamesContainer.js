import Breakout from '../components/Breakout';
import PersonalBest from '../components/PersonalBest';
import SuggestedGames from '../components/SuggestedGames';

function GamesContainer() {



    return(
        <>
            <h2>This is the GamesContainer</h2>
            <Breakout />
            <PersonalBest />
            <SuggestedGames />
        </>
    )
};

export default GamesContainer;