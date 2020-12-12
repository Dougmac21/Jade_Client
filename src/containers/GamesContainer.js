import Breakout from '../components/Breakout';
import Snake from '../components/Snake';
import PRS from '../components/PRS';
import Runner from '../components/Runner';

function GamesContainer() {



    return(
        <>
            <h2>This is the GamesContainer</h2>
            <Breakout />
            <Snake />
            <PRS />
            <Runner />
        </>
    )
};

export default GamesContainer;