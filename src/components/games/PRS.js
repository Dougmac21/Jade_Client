import { useEffect, useState } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/PRS.css';



function PRS() {

    function capitaliseFirstLetterOfString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const scoreUrl = "http://localhost:8080/scores";
    const playerUrl = "http://localhost:8080/players";

    const [PRSScores, setPRSScores] = useState([]);
    const [registeredPlayersList, setRegisteredPlayersList] = useState([])
    const [registeredPasswordsList, setRegisteredPasswordsList] = useState([])
    const [registeredPlayersObjectsList, setRegisteredPlayersObjectsList] = useState([])

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
    const cpu_players = ["Hal", "Morag", "Chris", "Hannah", "Zsolt", "Malcolm", "Harrison"]

    // let playerTwoGameChoice = permitted_choices[Math.floor(Math.random() * permitted_choices.length)]

    useEffect(() => {
        fetchPlayerData()
        fetchScoreData()
    }, [])


    function fetchPlayerData() {
        fetch(playerUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setRegisteredPlayersObjectsList(data)
                // console.log(registeredPlayersObjectsList);

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
            })
    }

    async function handleScoreSubmit(event) {
        event.preventDefault()
        setPlayerOneScore(playerOneScore)
        console.log(playerOneScore)

        // if player id and player name is in the db then post to db
        // else alert them to create new player or enter valid player name 

        let playerNameToSubmit = prompt("Please enter your name")
        console.log(registeredPlayersList)
        console.log(playerNameToSubmit)
        console.log(playerOneScore)

        let playerCheck = registeredPlayersList.find(element => element === playerNameToSubmit)

            if (playerCheck === undefined){
                console.log(playerNameToSubmit)
                alert("Please input a valid username or register as a user")
                fetchScoreData()
                return
            }
                

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
                        "id": 3,
                        "name": "PRS",
                        "total_play_time": 0
                    },
                    "score": playerOneScore,
                    "date": "2020-12-99"
                }
            )
        });
        if (response) {
            alert("Score saved!")
            fetchScoreData()
        }
    };



    // const handlePlayerOneNameChange = (event) => {
    //     setPlayerOneName(capitaliseFirstLetterOfString(event.target.value))
    // }
    const handleCPUPlayerChoice = (event) => {
        setPlayerTwoName(event.target.value)
        console.log(event.target.value)
    }
    const handlePlayerOneGameChoiceChange = (event) => {
        setPlayerOneGameChoice(capitaliseFirstLetterOfString(event.target.value))
    }
    // const handlePlayerTwoGameChoiceChange = (event) => {
    //     setPlayerTwoGameChoice(capitaliseFirstLetterOfString(event.target.value))
    // }


    const handleGameFormSubmit = (event) => {
        event.preventDefault()
        console.log(playerTwoName)
        console.log(playerOneGameChoice)
        cpuPlayerLogic(playerOneGameChoice, playerTwoName)
        runGameLogic(playerOneName, playerOneGameChoice, playerTwoName, playerTwoGameChoice)
    }


    function declareResult(result) {
        return
    }


    function cpuPlayerLogic(player1Choice, player2Name){

        if (player1Choice === "Paper") {
            setWinningChoice("Scissors")
            console.log(winningChoice)
        }
        else if (player1Choice === "Rock") {
            setWinningChoice("Paper")
            console.log(winningChoice)
        }
        else if (player1Choice === "Scissors") {
            setWinningChoice("Spock")
            console.log(winningChoice)
        }
        else if (player1Choice === "Lizard") {
            setWinningChoice("Rock")
            console.log(winningChoice)
        }
        else if (player1Choice === "Spock") {
            setWinningChoice("Lizard")
            console.log(winningChoice)
        }
        else if (player1Choice === "Shotgun") {
            setWinningChoice("Surrender")
            console.log(winningChoice)
        }

        
        if (player2Name === "Hal"){
            setPlayerTwoGameChoice("Paper")
            console.log(playerTwoGameChoice)
        }
        else if (player2Name === "Eugene"){
            setPlayerTwoGameChoice("Rock")
            console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Chris"){
            setPlayerTwoGameChoice(cpu_player_chris_choices[Math.floor(Math.random() * cpu_player_chris_choices.length)])
            console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Hannah"){
            setPlayerTwoGameChoice(cpu_player_hannah_choices[Math.floor(Math.random() * cpu_player_hannah_choices.length)])
            console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Zsolt"){
            setPlayerTwoGameChoice("Spock")
            console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Malcolm"){
            setPlayerTwoGameChoice(cpu_player_malcolm_choices[Math.floor(Math.random() * cpu_player_malcolm_choices.length)])
            console.log(playerTwoGameChoice)

        }
        else if (player2Name === "Harrison"){
            setPlayerTwoGameChoice(winningChoice)
            console.log(playerTwoGameChoice)

        }
    }




    function runGameLogic(player1Name, player1Choice, player2Name, player2Choice) {
        console.log(player1Name)
        console.log(player2Name)
        console.log(player1Choice)
        console.log(player2Choice)



        // for (let choice of permitted_choices){
        //     if (player1Choice !==choice && player2Choice !==choice){
        //         console.log("both choices invalid")
        //         setGameOutcome(`Both ${player1Name} and ${player2Name} must pick from the permitted choices!`)
        //         console.log(gameOutcome)
        //     }
        //     else if (player1Choice !== choice){
        //         console.log("p1 choice invalid")
        //         setGameOutcome(`${player1Name} must pick from the permitted choices!`)
        //         console.log(gameOutcome)
        //     }
        //     else if (player2Choice !== choice){
        //         console.log("p2 choice invalid")
        //         setGameOutcome(`${player2Name} must pick from the permitted choices!`)
        //         console.log(gameOutcome)
        //     }
        //     else if (player1Choice === player2Choice){
        //         console.log("p1 choice p2 choice draw")
        //         setGameOutcome(`Both ${player1Name} and ${player2Name} have chosen ${player1Choice}. That means that it's a tie!`)
        //         console.log(gameOutcome)
        //     }
        // } 


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

        // -----------------BREAKPOINT----------------- //

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

        // -----------------BREAKPOINT----------------- //

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

        // -----------------BREAKPOINT----------------- //

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

        // -----------------BREAKPOINT----------------- //

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
        <>
            <Header />
            <h1>Paper Rock Scissors Etc</h1>

            <h4 className="select-cpu-header">Select CPU Player:</h4>
            <div className="select-cpu-choice" onChange={handleCPUPlayerChoice}>

                <input className="select-cpu-choice" type="radio" value="Hal" name="gender" /> Hal
                <input className="select-cpu-choice" type="radio" value="Hannah" name="gender" /> Hannah
                <input className="select-cpu-choice" type="radio" value="Eugene" name="gender" /> Eugene
                <input className="select-cpu-choice" type="radio" value="Chris" name="gender" /> Chris
                <input className="select-cpu-choice" type="radio" value="Zsolt" name="gender" /> Zsolt
                <input className="select-cpu-choice" type="radio" value="Malcolm" name="gender" /> Malcolm
                <input className="select-cpu-choice" type="radio" value="Harrison" name="gender" /> Harrison

            </div>

            <form className="game-form" onSubmit={handleGameFormSubmit}>

                {/* <p>All-Time High Scores:</p>

                <ul id="scores-array">

                    {PRSScores.slice(0, 5).map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}

                </ul> */}

                <p>Current Score: {playerOneScore}</p>


                <input required type="text" name="player_1_weapon" id="player-one-weapon-input" placeholder="play choice..."
                    value={playerOneGameChoice}
                    onChange={handlePlayerOneGameChoiceChange}
                />


                {/* <p>Play Against:</p>
                <ul id="cpu-player-selector">
                    {cpu_players.map((value, index) => (
                        <button className="cpu-player-button" onClick={ handleCPUPlayerChoice } key={index}>{value}</button>
                    ))}
                </ul> */}

                <input type="submit" class="play-game-button" value="Play Game!" />
                
                <button class="submit-score-button" onClick={handleScoreSubmit}>Submit Score</button>

                <p>{gameOutcome}</p>


            </form>

            <Footer />
        </>

    )
};

export default PRS;