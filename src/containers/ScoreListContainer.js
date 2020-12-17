
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import '../styles/ScoreListContainer.css';

function ScoreListContainer() {

    const allScoresurl = "http://localhost:8080/scores";
    const [allTopScores, setAllTopScores] = useState([]);

    const breakoutScoresUrl = "http://localhost:8080/scores?gamename=breakout";
    const froggerScoresUrl = "http://localhost:8080/scores?gamename=frogger";
    const PRSScoresUrl = "http://localhost:8080/scores?gamename=prs";
    const spaceInvadersScoresUrl = "http://localhost:8080/scores?gamename=space%20invaders";
    const pacmanScoresUrl = "http://localhost:8080/scores?gamename=pacman";
    const snakeScoresUrl = "http://localhost:8080/scores?gamename=snake";

    const [topBreakoutScores, setTopBreakoutScores] = useState([]);
    const [topFroggerScores, setTopFroggerScores] = useState([]);
    const [topPRSScores, setTopPRSScores] = useState([]);
    const [topSpaceInvadersScores, setTopSpaceInvadersScores] = useState([]);
    const [topPacmanScores, setTopPacmanScores] = useState([]);
    const [topSnakeScores, setTopSnakeScores] = useState([]);

    const [topBreakoutScoresName, setTopBreakoutScoresName] = useState([]);
    const [topFroggerScoresName, setTopFroggerScoresName] = useState([]);
    const [topPRSScoresName, setTopPRSScoresName] = useState([]);
    const [topSpaceInvadersScoresName, setTopSpaceInvadersScoresName] = useState([]);
    const [topPacmanScoresName, setTopPacmanScoresName] = useState([]);
    const [topSnakeScoresName, setTopSnakeScoresName] = useState([]);




    useEffect(() => {
        fetchData()
        fetchBreakoutData()
        fetchFroggerData()
        fetchPRSData()
        fetchSpaceInvadersData()
        fetchPacmanData()
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
                setTopBreakoutScores(data.slice(0, 5).map(({ score }) => (score)))
                setTopBreakoutScoresName(data.slice(0, 5).map(({ player }) => (player.name)))
            })
    }

    function fetchFroggerData() {
        fetch(froggerScoresUrl)
            .then(res => res.json())
            .then(data => {
                setTopFroggerScores(data.slice(0, 5).map(({ score }) => (score)))
                setTopFroggerScoresName(data.slice(0, 5).map(({ player }) => (player.name)))
            })
    }

    function fetchPRSData() {
        fetch(PRSScoresUrl)
            .then(res => res.json())
            .then(data => {
                setTopPRSScores(data.slice(0, 5).map(({ score }) => (score)))
                setTopPRSScoresName(data.slice(0, 5).map(({ player }) => (player.name)))
            })
    }

    function fetchSpaceInvadersData() {
        fetch(spaceInvadersScoresUrl)
            .then(res => res.json())
            .then(data => {
                setTopSpaceInvadersScores(data.slice(0, 5).map(({ score }) => (score)))
                setTopSpaceInvadersScoresName(data.slice(0, 5).map(({ player }) => (player.name)))
            })
    }

    function fetchPacmanData() {
        fetch(pacmanScoresUrl)
            .then(res => res.json())
            .then(data => {
                setTopPacmanScores(data.slice(0, 5).map(({ score }) => (score)))
                setTopPacmanScoresName(data.slice(0, 5).map(({ player }) => (player.name)))
            })
    }

    function fetchSnakeData() {
        fetch(snakeScoresUrl)
            .then(res => res.json())
            .then(data => {
                setTopSnakeScores(data.slice(0, 5).map(({ score }) => (score)))
                setTopSnakeScoresName(data.slice(0, 5).map(({ player }) => (player.name)))
            })
    }

    return (
        <>
            <div className="score-list-container">
                <Header />
                <h2 id="hall-of-fame">HALL OF FAME</h2>

                <ul id="scores-list">
                    <li id="scores-1">
                        <p className="game-title">
                            <a href="http://localhost:3000/games/snake">SNAKE</a>
                        </p>
                        <div className="scores-grid" id="test-array">
                            <ul id="test-array">
                                {topSnakeScoresName.map((value, index) => (
                                    <li key={index}>{value}:</li>
                                ))}
                            </ul>
                            <ul id="test-array">
                                {topSnakeScores.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    <li id="scores-2">
                        <p className="game-title">BREAKOUT</p>
                        <div className="scores-grid" id="test-array">
                            <ul id="test-array">
                                {topBreakoutScoresName.map((value, index) => (
                                    <li key={index}>{value}:</li>
                                ))}
                            </ul>
                            <ul id="test-array">
                                {topBreakoutScores.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    <li id="scores-3">
                        <p className="game-title">INVADERS</p>
                        <div className="scores-grid" id="test-array">
                            <ul id="test-array">
                                {topSpaceInvadersScoresName.map((value, index) => (
                                    <li key={index}>{value}:</li>
                                ))}
                            </ul>
                            <ul id="test-array">
                                {topSpaceInvadersScores.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    <li id="scores-4">
                        <p className="game-title">FROGGER</p>
                        <div className="scores-grid" id="test-array">
                            <ul id="test-array">
                                {topFroggerScoresName.map((value, index) => (
                                    <li key={index}>{value}:</li>
                                ))}
                            </ul>
                            <ul id="test-array">
                                {topFroggerScores.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    <li id="scores-5">
                        <p className="game-title">PACMAN</p>
                        <div className="scores-grid" id="test-array">
                            <ul id="test-array">
                                {topPacmanScoresName.map((value, index) => (
                                    <li key={index}>{value}:</li>
                                ))}
                            </ul>
                            <ul id="test-array">
                                {topPacmanScores.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    <li id="scores-6">
                        <p className="game-title">
                            <a href="http://localhost:3000/games/prs">R.P.S.</a>
                        </p>
                        <div className="scores-grid" id="test-array">
                            <ul id="test-array">
                                {topPRSScoresName.map((value, index) => (
                                    <li key={index}>{value}:</li>
                                ))}
                            </ul>
                            <ul id="test-array">
                                {topPRSScores.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
                <Footer />
            </div>
        </>
    )
}

export default ScoreListContainer;