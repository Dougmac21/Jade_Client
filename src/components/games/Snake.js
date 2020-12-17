import { useEffect, useState, useRef, useCallback } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/Snake.css';


function Snake() {
    const [dim, setDim] = useState(0);
    const [chunk, setChunk] = useState(0);
    const [direction, setDirection] = useState('');
    const [fruit, setFruit] = useState(26);
    const [points, setPoints] = useState(0);
    const [game, setGame] = useState(true);
    const [gameOver, setGameOver] = useState(false)
    const speedRef = useRef(100);
    let width;
    const [snake, setSnake] = useState([
        {
            direction: 'right',
            part: [186, 185, 184, 183]
        }
    ]);

    const scoreUrl = "http://localhost:8080/scores";
    const playerUrl = "http://localhost:8080/players";



    const [snakeScores, setSnakeScores] = useState([])
    const [registeredPlayersList, setRegisteredPlayersList] = useState([])
    const [registeredPasswordsList, setRegisteredPasswordsList] = useState([])
    const [registeredPlayersObjectsList, setRegisteredPlayersObjectsList] = useState([])
    const [loggedInPlayerObject, setLoggedInPlayerObject] = useState({})
    const [loggedInPlayer, setLoggedInPlayer] = useState("")




    useEffect(() => {
        fetchScoreData()
        fetchPlayerData()
        
    }, [])


    function fetchPlayerData() {
        fetch(playerUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setRegisteredPlayersObjectsList(data)
                console.log(registeredPlayersObjectsList);

                setRegisteredPlayersList(data.map(({ name }) => name))
                console.log(registeredPlayersList);

                setRegisteredPasswordsList(data.map(({ password }) => password))
                console.log(registeredPasswordsList);
            })
    }


    function fetchScoreData() {
        fetch(scoreUrl + "?gamename=snake")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSnakeScores(data.map(({ score }) => score))
                console.log(snakeScores);
            })
    }





    async function handleScoreSubmit() {

        let playerNameToSubmit = prompt("Please enter your name")

        let playerCheck = registeredPlayersList.find(element => element === playerNameToSubmit)

        if (playerCheck === undefined) {
            console.log(playerNameToSubmit)
            alert("Please input a valid username or register as a user")
            fetchScoreData()
            return
        }

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time
        console.log(dateTime)

        const response = await fetch(scoreUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {

                    "player": {
                        "id": 1,
                        "name": playerNameToSubmit,
                        "password": "",
                        "arcade_play_time": 0
                    },
                    "game": {
                        "id": 1,
                        "name": "Snake",
                        "total_play_time": 0
                    },
                    "score": { points }.points,
                    "date": dateTime
                }
            )
        },
            setGame(true),
            setGameOver(false)
        );
        if (response) {
            alert("Score saved!")
            fetchScoreData()
        }
    };

    

    const reset = () => {
        speedRef.current = 100;
        setPoints(0)
        setDirection('right')
        setSnake([{
            direction: 'right',
            part: [186, 185, 184, 183]
        }])
        setGame(false)
        setGameOver(false)
    }
    const start = () => {
        speedRef.current = 100;
        setPoints(0)
        setDirection('right')
        setSnake([{
            direction: 'right',
            part: [186, 185, 184, 183]
        }])
        setGame(false)
    }
    const pieces = () => {//functionally label snake pieces (bang) and return
        let arr = [];
        for (let i = 0; i < 400; i++) {
            let addToArr = false;
            let j = 0;
            while (j < snake.length) {
                if (snake[j].part.indexOf(i) >= 0) {
                    addToArr = true
                    break;
                } else {
                    addToArr = false
                }
                j++
            }
            addToArr ? arr.push('bang') : i === fruit ? arr.push('fruit') : arr.push('')
        }
        return arr
    }
    //handle direction changes
    const turn = useCallback(
        (dir, opp) => {
            let tempSnake = [...snake];
            // console.log(snake[0].part)
            if (snake[0].part.length > 0 && direction !== opp && direction !== dir) {
                setDirection(dir)
                tempSnake.unshift({
                    direction: dir,
                    part: []
                })
                setSnake(tempSnake)
            }
        }, [snake, direction]
    )
    useEffect(() => {
        //determine relative dimensions of game portal
        width = window.innerWidth;
        if (width >= 800) {
            setDim(width * .35)
        } else if (width < 800) {
            setDim(width * .9);
        }
        setChunk(dim / 20)
        //points and get longer after eating
        if (snake[0].part[0] === fruit) {





            let audioContext = new AudioContext();

            function generateSound(amplitude, frequency, duration) {          //amplitude from 0 to 100, frequency in Hz, duration in milliseconds
                if (!audioContext) return;
                let oscillator = audioContext.createOscillator();
                let gain = audioContext.createGain();
                oscillator.connect(gain);
                oscillator.value = frequency;
                gain.connect(audioContext.destination);
                gain.gain.value = amplitude/100;
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime+duration/1000);
            }
        
            generateSound(40, 120, 80);
        





            setPoints(points + 1)
            let sneak = [...snake];
            let firstSection = sneak[0]
            if (firstSection.direction === 'up') {
                let y = firstSection.part[0] - 20;
                if (y < 0) {
                    firstSection.part.unshift(y + 400);
                } else {
                    firstSection.part.unshift(y)
                }
            } else if (firstSection.direction === 'right') {
                let y = firstSection.part[0] + 1;
                if (y % 20 === 0) {
                    firstSection.part.unshift(y + - 20);
                } else {
                    firstSection.part.unshift(y)
                }
            } else if (firstSection.direction === 'down') {
                let y = firstSection.part[0] + 20;
                if (y >= 400) {
                    firstSection.part.unshift(y - 400);
                } else {
                    firstSection.part.unshift(y)
                }
            } else if (firstSection.direction === 'left') {
                let y = firstSection.part[0] - 1;
                if (y % 20 === 19) {
                    firstSection.part.unshift(y + 20);
                } else {
                    firstSection.part.unshift(y)
                }
            }
            speedRef.current = speedRef.current - 2
            setSnake(sneak)
            setFruit(Math.floor(Math.random() * Math.floor(400)))

        }
        //gameover if you eat your tail
        let totalArr = [];
        for (let k = 0; k < snake.length; k++) {
            totalArr = [...totalArr, ...snake[k].part]
        }
        let head = snake[0].part[0];
        totalArr.filter(item => item === head).length >= 2 && setGameOver(true)
        if (!gameOver) {//if GAMEOVER pause events
            //listen for directions and update snake instructions accordingly
            const handleKeydown = (e) => {
                //let tempSnake: any = [...snake];
                switch (e.code) {
                    case 'ArrowUp':
                        e.preventDefault();
                        turn('up', 'down')
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        turn('right', 'left')
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        turn('down', 'up')
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        turn('left', 'right')
                        break;
                    default:
                }
            }
            document.addEventListener('keydown', handleKeydown)
            //event interval
            const interval = setInterval(() => {
                //handle snake piece movement
                let dupSneak = [...snake];
                for (let i = (snake.length - 1); i > 0; i--) {//increment through current snake and reduce to head direction
                    if (dupSneak[i].part.length !== 0) {
                        let next = dupSneak[i - 1];
                        let chunk = dupSneak[i].part.shift();
                        next.part.push(chunk)
                    } else {
                        dupSneak.pop()
                    }
                }
                let sneak = dupSneak;
                sneak.map((section) => {
                    if (section.direction === 'right') {
                        section.part.map((x, i) => {
                            let y = x + 1;
                            if (y % 20 === 0) {
                                return section.part[i] = y - 20;
                            } else {
                                return section.part[i] = y
                            }
                        })
                    } else if (section.direction === 'up') {
                        section.part.map((x, i) => {
                            let y = x - 20;
                            if (y < 0) {
                                return section.part[i] = y + 400;
                            } else {
                                return section.part[i] = y
                            }
                        })
                    } else if (section.direction === 'left') {
                        section.part.map((x, i) => {
                            let y = x - 1;
                            if (y % 20 === 19) {
                                return section.part[i] = y + 20;
                            } else {
                                return section.part[i] = y
                            }
                        })
                    } else if (section.direction === 'down') {
                        section.part.map((x, i) => {
                            let y = x + 20;
                            if (y >= 400) {
                                return section.part[i] = y - 400;
                            } else {
                                return section.part[i] = y
                            }
                        })
                    }
                    return ''
                })
                setSnake(sneak)
            }, speedRef.current);
            //remove interval and listeners
            return () => {
                clearInterval(interval)
                document.removeEventListener('keydown', handleKeydown)
            };
        }
    }, [turn, width, dim, chunk, snake, direction, points, fruit, game])





    
    return (
        <>
            <Header />
            <h1 id="header">SNAKE</h1>
            <div className="snake-container" id="snake-container">
                <div
                    className="game-border"
                    style={{ width: dim, height: dim, backgroundColor: "#ebebeb" }}>
                    {
                        pieces().map((piece, i) => {
                            return <div
                                key={'piece' + i}
                                style={piece === 'bang' ?
                                    { width: chunk, height: chunk, backgroundColor: "#248ec2" } :
                                    piece === 'fruit' ?
                                        { width: chunk, height: chunk, backgroundColor: "#1d355e" } :
                                        { width: chunk, height: chunk }}
                            >
                            </div>
                        })
                    }
                    {
                        gameOver && <div className="game-splash" style={{ height: dim }}>
                            <h1>Game Over</h1>
                            <h2>Your score was {points}</h2>
                            <button onClick={handleScoreSubmit}>Save Score</button>
                            {/* <button>Save Score</button> */}
                            <button onClick={() => reset()}>Try Again</button>
                        </div>
                    }
                    {
                        game && <div className="game-splash" style={{ height: dim }}>
                            <h1>GOOD LUCK</h1>
                            <h2 className="snake-header2">Rules: collect the apples!</h2>
                            <button onClick={() => start()}>Start</button>
                        </div>
                    }
                </div>
                <div
                    className="point-bar"
                    style={{ width: dim }}
                >
                    <div className="points-text">Score: {points}</div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Snake