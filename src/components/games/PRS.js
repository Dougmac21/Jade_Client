import { useEffect, useState } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/PRS.css'



function PRS() {

    function capitaliseFirstLetterOfString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const scoreUrl = "https://jade-back.herokuapp.com/scores";
    const playerUrl = "https://jade-back.herokuapp.com/players";
    const loginUrl = "https://jade-back.herokuapp.com/login";

    const [PRSScores, setPRSScores] = useState([]);
    const [registeredPlayersList, setRegisteredPlayersList] = useState([])
    const [registeredPasswordsList, setRegisteredPasswordsList] = useState([])
    const [registeredPlayersObjectsList, setRegisteredPlayersObjectsList] = useState([])
    const [loggedInPlayerObject, setLoggedInPlayerObject] = useState({})
    const [loggedInPlayer, setLoggedInPlayer] = useState("")

    const [playerOneName, setPlayerOneName] = useState("You")
    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [winningChoice, setWinningChoice] = useState("")
    const [gameOutcome, setGameOutcome] = useState("")

    const [playerOneGameChoice, setPlayerOneGameChoice] = useState("")
    const [playerTwoGameChoice, setPlayerTwoGameChoice] = useState("")
    const permitted_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock", "Shotgun"]
    const cpu_player_malcolm_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock"]
    const cpu_player_hannah_choices = ["Scissors", "Rock"]    // Spock always beats Hannah
    const cpu_player_chris_choices = ["Paper", "Lizard"]      // Scissors always beats Chris
    const cpu_players = ["Emily", "Morag", "Chris", "Hannah", "Zsolt", "Malcolm", "Harrison"]


    useEffect(() => {
        fetchLoggedInPlayer()
        fetchPlayerData()
        fetchScoreData()
    }, [])

    function fetchLoggedInPlayer() {
        // fetch(loginUrl)
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         setLoggedInPlayerObject(data)
        //         console.log(loggedInPlayerObject);

        //         setLoggedInPlayer(data.map(({ name }) => name))
        //         console.log(loggedInPlayer);
        //     })
        return
    }


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
        fetch(scoreUrl + "?gamename=prs")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPRSScores(data.map(({ score }) => score))
                console.log(PRSScores);
                console.log(data.map(({ date }) => date))
            })
    }


    async function handleScoreSubmit(event) {
        event.preventDefault()
        setPlayerOneScore(playerOneScore)
        console.log(playerOneScore)

        // let playerNameToSubmit = prompt("Please enter your name")
        // console.log(registeredPlayersList)
        // console.log(playerNameToSubmit)
        // console.log(playerOneScore)

        // let playerCheck = registeredPlayersList.find(element => element === playerNameToSubmit)

        // if (playerCheck === undefined) {
        //     console.log(playerNameToSubmit)
        //     alert("Please input a valid username or register as a user")
        //     fetchScoreData()
        //     return
        // }

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
                        "id": 2,
                        "name": "Amy",
                        "password": "",
                        "arcade_play_time": 0
                    },
                    "game": {
                        "id": 3,
                        "name": "PRS",
                        "total_play_time": 0
                    },
                    "score": playerOneScore,
                    "date": dateTime
                }
            )
        });
        if (response) {
            alert("Your Score Was Saved Amy!")
            fetchScoreData()
        }
    };


    const handleCPUPlayerChoice = (event) => {
        setPlayerTwoName(event.target.value)
        console.log(event.target.value)
    }
    const handlePlayerOneGameChoiceChange = (event) => {
        setPlayerOneGameChoice(capitaliseFirstLetterOfString(event.target.value))
    }


    const handleGameFormSubmit = (event) => {
        event.preventDefault()
        console.log(playerTwoName)
        console.log(playerOneGameChoice)
        cpuPlayerLogic(playerOneGameChoice, playerTwoName)
        let playerCheck = permitted_choices.find(element => element === playerOneGameChoice)
        if (playerCheck === undefined) {
            console.log(playerOneGameChoice + " IS NOT PERMITTED CHOICE")
            alert("Permitted choices include: Paper, Rock, Scissors, Lizard, Spock")
            return
        }
        runGameLogic(playerOneName, playerOneGameChoice, playerTwoName, playerTwoGameChoice)
    }


    function declareResult(result) {
        return
    }


    function cpuPlayerLogic(player1Choice, player2Name) {

        if (player1Choice === "Paper") {
            setWinningChoice("Scissors")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Rock") {
            setWinningChoice("Paper")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Scissors") {
            setWinningChoice("Spock")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Lizard") {
            setWinningChoice("Rock")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Spock") {
            setWinningChoice("Lizard")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Shotgun") {
            setWinningChoice("Surrender")
            // console.log(winningChoice)
        }

        // CONTINUING //

        if (player2Name === "Emily") {
            setPlayerTwoGameChoice("Paper")
            // console.log(playerTwoGameChoice)
        }
        else if (player2Name === "Eugene") {
            setPlayerTwoGameChoice("Rock")
            // console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Chris") {
            setPlayerTwoGameChoice(cpu_player_chris_choices[Math.floor(Math.random() * cpu_player_chris_choices.length)])
            // console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Hannah") {
            setPlayerTwoGameChoice(cpu_player_hannah_choices[Math.floor(Math.random() * cpu_player_hannah_choices.length)])
            // console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Zsolt") {
            setPlayerTwoGameChoice("Spock")
            // console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Malcolm") {
            setPlayerTwoGameChoice(cpu_player_malcolm_choices[Math.floor(Math.random() * cpu_player_malcolm_choices.length)])
            // console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Harrison") {
            setPlayerTwoGameChoice(winningChoice)
            // console.log(playerTwoGameChoice)

        }
    }




    function runGameLogic(player1Name, player1Choice, player2Name, player2Choice) {
        // console.log(player1Name)
        // console.log(player2Name)
        // console.log(player1Choice)
        // console.log(player2Choice)


        if (player1Choice === "Paper" && player2Choice === "Rock") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Paper wraps Rock. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
            console.log(playerOneScore)
        }
        else if (player1Choice === "Paper" && player2Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}.Scissors cut Paper.${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
            console.log(playerTwoScore)
        }
        else if (player1Choice === "Paper" && player2Choice === "Lizard") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard eats Paper. ${player2Name} Wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
            console.log(playerTwoScore)
        }
        else if (player1Choice === "Paper" && player2Choice === "Spock") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock is disproved by Paper. ${player1Name} Win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
            console.log(playerOneScore)
        }
        else if (player1Choice === "Paper" && player2Choice === "Shotgun") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
            console.log(playerTwoScore)
        }
        else if (player1Choice === "Paper" && player2Choice === "Surrender") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
            declareResult(gameOutcome)
            console.log(playerTwoScore)
        }

        // -----------------CONTINUED----------------- //

        else if (player1Choice === "Rock" && player2Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Scissors. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Rock" && player2Choice === "Paper") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Paper wraps Rock. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Rock" && player2Choice === "Lizard") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Lizard. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Rock" && player2Choice === "Spock") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock vaporises Rock. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Rock" && player2Choice === "Shotgun") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Rock" && player2Choice === "Surrender") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }

        // -----------------CONTINUED----------------- //

        else if (player2Choice === "Paper" && player1Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Scissors cut Paper. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player2Choice === "Rock" && player1Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Scissors. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player2Choice === "Lizard" && player1Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard is decapitated by Scissors. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player2Choice === "Spock" && player1Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock smashes Scissors. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player2Choice === "Shotgun") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player2Choice === "Surrender") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }

        // -----------------BREAKPOINT----------------- //

        else if (player1Choice === "Lizard" && player2Choice === "Paper") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard eats Paper. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Lizard" && player2Choice === "Rock") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Lizard. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Lizard" && player2Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Scissors decapitate Lizard. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Lizard" && player2Choice === "Spock") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard poisons Spock. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Lizard" && player2Choice === "Shotgun") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Lizard" && player2Choice === "Surrender") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }

        // -----------------CONTINUED----------------- //

        else if (player1Choice === "Spock" && player2Choice === "Paper") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Paper disproves Spock. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Spock" && player2Choice === "Rock") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock vaporises Rock. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Spock" && player2Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock smashes Scissors. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Spock" && player2Choice === "Lizard") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard poisons Spock. ${player2Name} wins!`)
            setPlayerTwoScore(playerTwoScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }

        else if (player1Choice === "Spock" && player2Choice === "Shotgun") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Spock" && player2Choice === "Surrender") {
            setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }

        // -----------------CONTINUED----------------- //

        else if (player1Choice === "Shotgun" && player2Name === "Harrison") {
            setGameOutcome(`${player1Name} chose ${player1Choice} because ${player2Name} is cheating. ${player2Name} chose ${player2Choice}. ${player1Name} win!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Shotgun" && player2Name !== "Harrison") {
            setGameOutcome(`${player1Name} must pick from the permitted choices!`)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
    }


    return (

        <div className="prs-container">
            <Header />
            <br />
            <h1 id="header">Paper Rock Scissors</h1>
            {/* <p className="prs-text">{loggedInPlayer} is logged in</p> */}
            <br />
            <h4 className="prs-h2">Select Opponent:</h4>
            <div className="select-cpu-choice" onChange={handleCPUPlayerChoice}>
                <input className="select-cpu-choice" type="radio" value="Emily" name="gender" /> Emily
                <input className="select-cpu-choice" type="radio" value="Hannah" name="gender" /> Hannah
                <input className="select-cpu-choice" type="radio" value="Eugene" name="gender" /> Eugene
                <input className="select-cpu-choice" type="radio" value="Chris" name="gender" /> Chris
                <input className="select-cpu-choice" type="radio" value="Zsolt" name="gender" /> Zsolt
                <input className="select-cpu-choice" type="radio" value="Malcolm" name="gender" /> Malcolm
                <input className="select-cpu-choice" type="radio" value="Harrison" name="gender" /> Harrison
            </div>

            <form className="game-form" onSubmit={handleGameFormSubmit}>
                <br />
                <br />
                <p className="prs-text">Current Score: {playerOneScore}</p>
                <br />
                <input required type="text" name="player_1_weapon" id="player-one-weapon-input" placeholder="play choice..."
                    value={playerOneGameChoice}
                    onChange={handlePlayerOneGameChoiceChange}
                />
                <input className="prs-button" type="submit" value="Play Game!" />

                <br />
                <button className="prs-button" onClick={handleScoreSubmit}>Submit Score</button>

                <p className="prs-text" >{gameOutcome}</p>


            </form>
            {/* <br />
            <br />
            <h2 className="prs-h2">All-Time High Scores:</h2>
            <ul id="scores-array">
                {PRSScores.slice(0, 5).map((value, index) => (
                    <li key={index} id="scores-values">{value}</li>
                ))}
            </ul> */}

            <Footer />
        </div>


    )
};

export default PRS;