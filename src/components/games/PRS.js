import { useEffect, useState } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import PlayerController from '../PlayerController'


function PRS() {

    const url = "http://localhost:8080/scores";

    const [PRSScores, setPRSScores] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])


    function fetchData() {
        fetch(url + "?gamename=prs")
            .then(res => res.json())
            .then(data => {
                console.log(data)

                const fetchedScores = data.map(({ score }) => score);
                console.log(fetchedScores);
                setPRSScores(fetchedScores);
                console.log(PRSScores);
            })
    }


    async function handleScoreSubmit(event) {
        event.preventDefault()
        console.log({ playerOneScore })

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {

                    "player": {
                        "id": 3,
                        "name": "MR AWESOME JENKEN MANN",
                        "password": "A",
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
            fetchData()
        }
    };



    function capitaliseFirstLetterOfString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    let playerOneName = "playerName"
    let playerTwoName = "CPU"
    const [playerOneGameChoice, setPlayerOneGameChoice] = useState("")
    // const [playerTwoGameChoice, setPlayerTwoGameChoice] = useState("")
    const permitted_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock", "Shotgun"]

    let playerTwoGameChoice = permitted_choices[Math.floor(Math.random() * permitted_choices.length)]


    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)

    const [winningChoice, setWinningChoice] = useState("")
    const [gameOutcome, setGameOutcome] = useState("")



    // const handlePlayerOneNameChange = (event) => {
    //     setPlayerOneName(capitaliseFirstLetterOfString(event.target.value))
    // console.log(playerOneName)
    // }
    // const handlePlayerTwoNameChange = (event) => {
    //     setPlayerTwoName(event.target.value)
    //     console.log(playerTwoName)
    // }
    const handlePlayerOneGameChoiceChange = (event) => {
        setPlayerOneGameChoice(capitaliseFirstLetterOfString(event.target.value))
        console.log(playerOneGameChoice)
    }
    // const handlePlayerTwoGameChoiceChange = (event) => {
    //     setPlayerTwoGameChoice(capitaliseFirstLetterOfString(event.target.value))
    //     console.log(playerTwoGameChoice)
    // }

    const handleGameFormSubmit = (event) => {
        event.preventDefault()
        // console.log(playerOneName)
        // console.log(playerTwoName)
        // console.log(playerOneGameChoice)
        // console.log(playerTwoGameChoice)
        runGameLogic(playerOneName, playerOneGameChoice, playerTwoName, playerTwoGameChoice)
    }


    const cpu_player_malcolm_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock"]
    const cpu_player_hannah_choices = ["Scissors", "Rock"]    // Spock always beats Hannah
    const cpu_player_chris_choices = ["Paper", "Lizard"]      // Scissors always beats Chris
    const cpu_players = ["Hal", "Morag", "Chris", "Hannah", "Zsolt", "Malcolm", "Harrison"]

    function declareResult(result) {
        return
    }

    function saveScore() {
        return
    }

    function runGameLogic(player1Name, player1Choice, player2Name, player2Choice) {

        // (SET WINNING CHOICES FOR GIVEN PLAYER INPUT)
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
            // console.log(`Winning choice is ${winningChoice}`)
        }
        else if (player1Choice === "Shotgun") {
            setWinningChoice("Surrender")
            // console.log(winningChoice)
        }




        // if (player2Name === "Hal"){
        //     player2Choice = "Paper"
        // }
        // else if (player2Name === "Morag"){
        //     player2Choice = "Rock"
        // }
        // else if (player2Name === "Chris"){
        //     player2Choice = cpu_player_chris_choices[Math.floor(Math.random() * cpu_player_chris_choices.length)]
        // }
        // else if (player2Name === "Hannah"){
        //     player2Choice = cpu_player_hannah_choices[Math.floor(Math.random() * cpu_player_hannah_choices.length)]
        // }
        // else if (player2Name === "Zsolt"){
        //     player2Choice = "Spock"
        // }
        // else if (player2Name === "Malcolm"){
        //     player2Choice = cpu_player_malcolm_choices[Math.floor(Math.random() * cpu_player_malcolm_choices.length)]
        // }
        // else if (player2Name === "Harrison"){
        //     player2Choice = winningChoice
        // }
        // setPlayerTwoGameChoice(player2Choice)



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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Paper wraps Rock. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock is disproved by Paper. ${player1Name} Wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Scissors. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Lizard. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Scissors cut Paper. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard is decapitated by Scissors. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard eats Paper. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard poisons Spock. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock vaporises Rock. ${player1Name} wins!`)
            setPlayerOneScore(playerOneScore + 1)
            declareResult(gameOutcome)
            console.log(gameOutcome)
        }
        else if (player1Choice === "Spock" && player2Choice === "Scissors") {
            setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock smashes Scissors. ${player1Name} wins!`)
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
            setGameOutcome(`${player1Name} chose ${player1Choice} because ${player2Name} is cheating. ${player2Name} chose ${player2Choice}. ${player1Name} wins!`)
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
            <PlayerController/>
            <h1>Paper Rock Scissors</h1>

            <form className="game-form" onSubmit={handleGameFormSubmit}>

                <p>{playerOneName}</p>
                <span>{playerOneScore}</span>
                <br></br>

                <label for="player_1_weapon">Weapon:</label>
                <input required type="text" name="player_1_weapon" id="player_1_weapon" placeholder="select your weapon"
                    value={playerOneGameChoice}
                    onChange={handlePlayerOneGameChoiceChange}
                />
                <br></br>
                <br></br>

                {/* <label for="player_2_name">Player 2:</label>
                <input type="select" name="player_2" id="player_2" placeholder="insert name here"
                value={ playerTwoName }
                onChange={ handlePlayerTwoNameChange }
                />
                <span>{ playerTwoScore }</span>
                <br></br> */}

                {/* <select id="cpu-player-select">

                    {cpu_players.map((value, index) => (
                        <option onSelect={ handlePlayerTwoNameChange }key={index}>{value}</option>
                    ))}

                </select> */}



                {/* <label for="player_2_weapon">Weapon:</label>
                <input type="text" name="player_2_weapon" id="player_2_weapon" placeholder="select your weapon"
                value={ playerTwoGameChoice }
                onChange={ handlePlayerTwoGameChoiceChange }/>
                <br></br>
                <br></br> */}


                <br></br>
                <input type="submit" value="Play Game!" />
                <br></br>
                <br></br>
                <p>{gameOutcome}</p>
                <br></br>
                <br></br>
            </form>

            <form>
                <button onClick={handleScoreSubmit}>Submit Score</button>
                <hr></hr>
                <br></br>

                <ul id="scores-array">

                    {PRSScores.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}

                </ul>

            </form>
            <Footer />
        </>

    )
};

export default PRS;