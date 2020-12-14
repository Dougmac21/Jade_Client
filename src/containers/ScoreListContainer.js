import { useEffect, useState } from 'react';
import './ScoreListContainer.css';


function ScoreListContainer() {


    const url = "http://localhost:8080/scores";
    const snakeScoresUrl = "http://localhost:8080/scores?gamename=snake";
    let allScoresObjects = [];
 
    const [snakeScores, setSnakeScores] = useState([]);
       
    
    useEffect(() => {
        fetchData()
    }, [])


    function fetchData() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const scoresObjects = [].concat(data);
            // console.log(registeredPlayersObjects)
            allScoresObjects = scoresObjects;
            console.log(allScoresObjects);
        })
        fetch(snakeScoresUrl)
        .then(res => res.json())
        .then(data => {
            setSnakeScores(data.map(({score}) => (score)))
        })
    }
    
    const testArray = [1, "2", 3, "4", "5"];

    return (
        <>
            <ul id="scores-list">

                <li class="scores-list-item" id="scores-1">
                <p> GENERAL KENOBI </p>
                    <>
                        <ul id="test-array">

                            {testArray.map((value, index) => (
                            <li key={index}>{value}</li> 
                            ))}

                        </ul>
                    </>
                    <>
                        <ul id="test-array">
                    
                            {snakeScores.map((value, index) => (
                            <li key={index}>{value}</li>
                            ))}

                        </ul>
                    </>

                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-2">
                <img class="scores-list-img" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-3">
                <img class="scores-list-img" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-4">
                <img class="scores-list-img" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-5">
                <img class="scores-list-img" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-6">
                <img class="scores-list-img" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

            </ul>
        </>
    )
}

export default ScoreListContainer;