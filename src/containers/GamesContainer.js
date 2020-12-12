import Breakout from '../components/games/Breakout';
import Snake from '../components/games/Snake';
import PRS from '../components/games/PRS';
import Runner from '../components/games/Runner';
import Shooter from '../components/games/Shooter';

function GamesContainer() {

    let canvasCSS = {
        background: "#eee",
        display: "grid",
        margin: "0 auto"
    }

    return(
        <>
            <h2>This is the GamesContainer</h2>
            <Breakout />
            <Snake />
            <PRS />
            <Runner />
            <Shooter />
        </>
    )
};

export default GamesContainer;