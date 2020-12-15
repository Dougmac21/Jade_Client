<<<<<<< HEAD
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
=======
import { useEffect, useState } from 'react';
import './ScoreListContainer.css';

>>>>>>> ad0f05ad752eadb813c9dca8591209bd03859ea8

function ScoreListContainer() {


    const allScoresurl = "http://localhost:8080/scores";
    const [allTopScores, setAllTopScores] = useState([]);

    const breakoutScoresUrl = "http://localhost:8080/scores?gamename=breakout";
    const froggerScoresUrl = "http://localhost:8080/scores?gamename=frogger";
    const PRSScoresUrl = "http://localhost:8080/scores?gamename=prs";
    const runnerScoresUrl = "http://localhost:8080/scores?gamename=runner";
    const shooterScoresUrl = "http://localhost:8080/scores?gamename=shooter";
    const snakeScoresUrl = "http://localhost:8080/scores?gamename=snake";
 
    const [topBreakoutScores, setTopBreakoutScores] = useState([]);
    const [topFroggerScores, setTopFroggerScores] = useState([]);
    const [topPRSScores, setTopPRSScores] = useState([]);
    const [topRunnerScores, setTopRunnerScores] = useState([]);
    const [topShooterScores, setTopShooterScores] = useState([]);
    const [topSnakeScores, setTopSnakeScores] = useState([]);

      
    
    useEffect(() => {
        fetchData()
        fetchBreakoutData()
        fetchFroggerData()
        fetchPRSData()
        fetchRunnerData()
        fetchShooterData()
        fetchSnakeData()
    }, [])



    function fetchData() {
        fetch(allScoresurl)
        .then(res => res.json())
        .then(data => {
            setAllTopScores(data);
        })
    }

    function fetchBreakoutData() {
        fetch(breakoutScoresUrl)
        .then(res => res.json())
        .then(data => {
            setTopBreakoutScores(data.slice(0, 5).map(({score}) => (score)))
        })
    }

    function fetchFroggerData() {
        fetch(froggerScoresUrl)
        .then(res => res.json())
        .then(data => {
            setTopFroggerScores(data.slice(0, 5).map(({score}) => (score)))
        })
    }

    function fetchPRSData() {
        fetch(PRSScoresUrl)
        .then(res => res.json())
        .then(data => {
            setTopPRSScores(data.slice(0, 5).map(({score}) => (score)))
        })
    }

    function fetchRunnerData() {
        fetch(runnerScoresUrl)
        .then(res => res.json())
        .then(data => {
            setTopRunnerScores(data.slice(0, 5).map(({score}) => (score)))
        })
    }

    function fetchShooterData() {
        fetch(shooterScoresUrl)
        .then(res => res.json())
        .then(data => {
            setTopShooterScores(data.slice(0, 5).map(({score}) => (score)))
        })
    }

    function fetchSnakeData() {
        fetch(snakeScoresUrl)
        .then(res => res.json())
        .then(data => {
            setTopSnakeScores(data.slice(0, 5).map(({score}) => (score)))
        })
    }
    
    // const testArray = [1, "2", 3, "4", "5", "banana"];

    return (
        <>
<<<<<<< HEAD
            <Header />
            <h2>Score list </h2>
            <Footer />
=======
            <h2>HALL OF FAME</h2>
            
            <ul id="scores-list">

                <li class="scores-list-item" id="scores-1">
                <p> SNAKE </p>

                    <>
                        <ul id="test-array">
                    
                            {topSnakeScores.map((value, index) => (
                            <li key={index}>{value}</li>
                            ))}

                        </ul>
                    </>

                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-2">
                <p> BREAKOUT </p>

                    <>
                        <ul id="test-array">
                    
                            {topBreakoutScores.map((value, index) => (
                            <li key={index}>{value}</li>
                            ))}

                        </ul>
                    </>

                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-3">
                <p> RUNNER </p>

                    <>
                        <ul id="test-array">
                    
                            {topRunnerScores.map((value, index) => (
                            <li key={index}>{value}</li>
                            ))}

                        </ul>
                    </>

                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-4">
                <p> FROGGER </p>

                    <>
                        <ul id="test-array">
                    
                            {topFroggerScores.map((value, index) => (
                            <li key={index}>{value}</li>
                            ))}

                        </ul>
                    </>

                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-5">
                <p> SHOOTER </p>

                    <>
                        <ul id="test-array">
                    
                            {topShooterScores.map((value, index) => (
                            <li key={index}>{value}</li>
                            ))}

                        </ul>
                    </>

                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>

                <li class="scores-list-item" id="scores-6">
                <p> PAPER ROCK SCISSORS </p>

                    <>
                        <ul id="test-array">
                    
                            {topPRSScores.map((value, index) => (
                            <li key={index}>{value}</li>
                            ))}

                        </ul>
                    </>

                    <div class="overlay">
                        <div class="text">See All Scores</div>
                    </div>
                </li>


            </ul>
>>>>>>> ad0f05ad752eadb813c9dca8591209bd03859ea8
        </>
    )
}

export default ScoreListContainer;