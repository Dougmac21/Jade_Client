import './GamesListContainer.css'

function GamesListContainer() {





    return (
        <>
            <h2>This is the List of Playable GamesContainer</h2>
            <ul id="games-list">


                <li class="container" id="game-1"> 
                    <img class="image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">Hello World</div>
                    </div>
                </li>


                <li class="games-list-item" id="game-2"> 
                    <img src="https://placebear.com/300/300" alt="bear boi"></img>
                </li>
                <li class="games-list-item" id="game-3"> 
                    <img src="https://placebear.com/300/300" alt="bear boi"></img>
                </li>
                <li class="games-list-item" id="game-4"> 
                    <img src="https://placebear.com/300/300" alt="bear boi"></img>
                </li>

            </ul>
        </>
    )
};

export default GamesListContainer;