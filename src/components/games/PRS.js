import { useEffect, useState } from 'react';



function PRS() {

    function capitaliseFirstLetterOfString(string){
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const [playerOneName, setPlayerOneName] = useState("")
    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerOneGameChoice, setPlayerOneGameChoice] = useState("")
    const [playerTwoGameChoice, setPlayerTwoGameChoice] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)

    const [winningChoice, setWinningChoice] = useState("")
    const [gameOutcome, setGameOutcome] = useState("")

    useEffect(() => {
        if (gameOutcome !== ""){
            declareResult(gameOutcome)
            saveScore()
        }
    }, [setGameOutcome])

    const handlePlayerOneNameChange = (event) => {
        setPlayerOneName(capitaliseFirstLetterOfString(event.target.value))
        // console.log(playerOneName)
    }
    const handlePlayerTwoNameChange = (event) => {
        setPlayerTwoName(capitaliseFirstLetterOfString(event.target.value))
        // console.log(playerTwoName)
    }
    const handlePlayerOneGameChoiceChange = (event) => {
        setPlayerOneGameChoice(capitaliseFirstLetterOfString(event.target.value))
        // console.log(playerOneGameChoice)
    }
    const handlePlayerTwoGameChoiceChange = (event) => {
        setPlayerTwoGameChoice(capitaliseFirstLetterOfString(event.target.value))
        // console.log(playerTwoGameChoice)
    }

    const handleGameFormSubmit = (event) => {
        event.preventDefault()
        // console.log(playerOneName)
        // console.log(playerTwoName)
        // console.log(playerOneGameChoice)
        // console.log(playerTwoGameChoice)
        runGameLogic(playerOneName, playerOneGameChoice, playerTwoName, playerTwoGameChoice)
    }

    
    const permitted_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock", "Shotgun", ""]
    const cpu_player_malcolm_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock"]
    const cpu_player_hannah_choices = ["Scissors", "Rock"]    // Spock always beats Hannah
    const cpu_player_chris_choices = ["Paper", "Lizard"]      // Scissors always beats Chris
    const cpu_players = ("Hal", "Morag", "Chris", "Hannah", "Zsolt", "Malcolm", "Harrison")

    function declareResult(result){
        alert(result)
    }

    function saveScore(){
        return
    }

    function runGameLogic(player1Name, player1Choice, player2Name, player2Choice){

        // (SET WINNING CHOICES FOR GIVEN PLAYER INPUT)
        if (player1Choice === "Paper") {
            setWinningChoice("Scissors")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Rock"){
            setWinningChoice("Paper")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Scissors"){
            setWinningChoice("Spock")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Lizard"){
            setWinningChoice("Rock")
            // console.log(winningChoice)
        }
        else if (player1Choice === "Spock"){
            setWinningChoice("Lizard")
            // console.log(`Winning choice is ${winningChoice}`)
        }
        else if (player1Choice === "Shotgun"){
            setWinningChoice("Surrender")
            // console.log(winningChoice)
        }
        
        // (SELECT A CPU PLAYER)
        // if (player2Name === "CPU"){
        // setPlayerTwoName(cpu_players[Math.floor(Math.random() * cpu_players.length)])
            
        
        //     if (player2Name === "Hal"){
        //         player2Choice = "Paper"
        //     }
        //     else if (player2Name === "Morag"){
        //         player2Choice = "Rock"
        //     }
        //     else if (player2Name === "Chris"){
        //         player2Choice = cpu_player_chris_choices[Math.floor(Math.random() * cpu_player_chris_choices.length)]
        //     }
        //     else if (player2Name === "Hannah"){
        //         player2Choice = cpu_player_hannah_choices[Math.floor(Math.random() * cpu_player_hannah_choices.length)]
        //     }
        //     else if (player2Name === "Zsolt"){
        //         player2Choice = "Spock"
        //     }
        //     else if (player2Name === "Malcolm"){
        //         player2Choice = cpu_player_malcolm_choices[Math.floor(Math.random() * cpu_player_malcolm_choices.length)]
        //     }
        //     else if (player2Name === "Harrison"){
        //         player2Choice = winningChoice
        //     }
        //     setPlayerTwoGameChoice(player2Choice)
        // }
        

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
    

            if (player1Choice === "Paper" && player2Choice === "Rock"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Paper wraps Rock. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
                console.log(playerOneScore)
            }
            else if (player1Choice === "Paper" && player2Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}.Scissors cut Paper.${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
                console.log(playerTwoScore)
            }
            else if (player1Choice === "Paper" && player2Choice === "Lizard"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard eats Paper. ${player2Name} Wins!`)
                setPlayerTwoScore(playerTwoScore +1)
                console.log(playerTwoScore)
            }
            else if (player1Choice === "Paper" && player2Choice === "Spock"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock is disproved by Paper. ${player1Name} Wins!`)
                setPlayerOneScore(playerOneScore + 1)
                console.log(playerOneScore)
            }
            else if (player1Choice === "Paper" && player2Choice === "Shotgun"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
                setPlayerTwoScore(playerTwoScore +1)
                console.log(playerTwoScore)
            }
            else if (player1Choice === "Paper" && player2Choice === "Surrender"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
                setPlayerTwoScore(playerTwoScore +1)
                console.log(playerTwoScore)
            }

                    // -----------------BREAKPOINT----------------- //

            else if (player1Choice === "Rock" && player2Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Scissors. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player1Choice === "Rock" && player2Choice === "Paper"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Paper wraps Rock. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }
            else if (player1Choice === "Rock" && player2Choice === "Lizard"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Lizard. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player1Choice === "Rock" && player2Choice === "Spock"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock vaporises Rock. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }
            else if (player1Choice === "Rock" && player2Choice === "Shotgun"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            }
            else if (player1Choice === "Rock" && player2Choice === "Surrender"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            } 

                    // -----------------BREAKPOINT----------------- //

            else if (player2Choice === "Paper" && player1Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Scissors cut Paper. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player2Choice === "Rock" && player1Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Scissors. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }        
            else if (player2Choice === "Lizard" && player1Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard is decapitated by Scissors. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player2Choice === "Spock" && player1Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock smashes Scissors. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }
            else if (player2Choice === "Shotgun"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            }
            else if (player2Choice === "Surrender"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            }

                        // -----------------BREAKPOINT----------------- //

            else if (player1Choice === "Lizard" && player2Choice === "Paper"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard eats Paper. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player1Choice === "Lizard" && player2Choice === "Rock"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Rock crushes Lizard. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }
            else if (player1Choice === "Lizard" && player2Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Scissors decapitate Lizard. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }
            else if (player1Choice === "Lizard" && player2Choice === "Spock"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard poisons Spock. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player1Choice === "Lizard" && player2Choice === "Shotgun"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            }
            else if (player1Choice === "Lizard" && player2Choice === "Surrender"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            }

                   // -----------------BREAKPOINT----------------- //

            else if (player1Choice === "Spock" && player2Choice === "Paper"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Paper disproves Spock. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }
            else if (player1Choice === "Spock" && player2Choice === "Rock"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock vaporises Rock. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player1Choice === "Spock" && player2Choice === "Scissors"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Spock smashes Scissors. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player1Choice === "Spock" && player2Choice === "Lizard"){
                setGameOutcome(`${player1Name} chose ${player1Choice}. ${player2Name} chose ${player2Choice}. Lizard poisons Spock. ${player2Name} wins!`)
                setPlayerTwoScore(playerTwoScore +1)
            }
            
            else if (player1Choice === "Spock" && player2Choice === "Shotgun"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            }
            else if (player1Choice === "Spock" && player2Choice === "Surrender"){
                setGameOutcome(`${player2Name} must pick from the permitted choices!`)
            }

                        // -----------------BREAKPOINT----------------- //

            else if (player1Choice === "Shotgun" && player2Name === "Harrison"){
                setGameOutcome(`${player1Name} chose ${player1Choice} because ${player2Name} is cheating. ${player2Name} chose ${player2Choice}. ${player1Name} wins!`)
                setPlayerOneScore(playerOneScore + 1)
            }
            else if (player1Choice === "Shotgun" && player2Name !== "Harrison"){
                setGameOutcome(`${player1Name} must pick from the permitted choices!`)
            }
    }


    return(
        <>
            <h1>Paper Rock Scissors</h1>
    
            <form className="game-form" onSubmit={ handleGameFormSubmit }>

                <label for="player_1">Player 1:</label>
                <input required type="text" name="player_1" id="player_1" placeholder="insert name here"
                value={ playerOneName }
                onChange={ handlePlayerOneNameChange }
                />
                <span>{ playerOneScore }</span>
                <br></br>

                <label for="player_1_weapon">Weapon:</label>
                <input required type="text" name="player_1_weapon" id="player_1_weapon" placeholder="select your weapon"
                value={ playerOneGameChoice }
                onChange={ handlePlayerOneGameChoiceChange }
                />
                <br></br>
                <br></br>

                <label for="player_2_name">Player 2:</label>
                <input type="text" name="player_2" id="player_2" placeholder="insert name here"
                value={ playerTwoName }
                onChange={ handlePlayerTwoNameChange }
                />
                <span>{ playerTwoScore }</span>
                <br></br>

                <label for="player_2_weapon">Weapon:</label>
                <input type="text" name="player_2_weapon" id="player_2_weapon" placeholder="select your weapon"
                value={ playerTwoGameChoice }
                onChange={ handlePlayerTwoGameChoiceChange }/>
                <br></br>
                <br></br>

                <label for="cpu_player">CPU Player?</label>
                <input type="checkbox" name="cpu_player?" id="cpu_player?"></input>

                <br></br>
                <input type="submit" value="Play Game!"/>
                <br></br>
                <br></br>


            </form>
              
        </>
    )
};

export default PRS;