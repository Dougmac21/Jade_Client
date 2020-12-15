import './GamesListContainer.css'

function GamesListContainer() {


    return (
        <>
            <ul id="games-list">


                <li class="games-list-item" id="game-1"> 
                    <img class="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">Play Snake</div>
                    </div>
                </li>


                <li class="games-list-item" id="game-2"> 
                    <img class="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">Play Runner</div>
                    </div>
                </li>
                <li class="games-list-item" id="game-3"> 
                    <img class="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">Play Breakout</div>
                    </div>
                </li>
                <li class="games-list-item" id="game-4"> 
                    <img class="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">Play PRS</div>
                    </div>
                </li>
                <li class="games-list-item" id="game-5"> 
                    <img class="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">Play Frogger</div>
                    </div>
                </li>
                <li class="games-list-item" id="game-6"> 
                    <img class="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">Play Clicker</div>
                    </div>
                </li>

            </ul>
        </>
    )
};

export default GamesListContainer;