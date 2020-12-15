import { useState } from 'react';



function PRS() {

    // function capitaliseFirstLetterOfString(string){
    //     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // }

    const [playerOneName, setPlayerOneName] = useState("")
    const [playerTwoName, setPlayerTwoName] = useState("")
    const [playerOneGameChoice, setPlayerOneGameChoice] = useState("")
    const [playerTwoGameChoice, setPlayerTwoGameChoice] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)

    const [winningChoice, setWinningChoice] = useState("")
    const [gameOutcome, setGameOutcome] = useState("")


    const handlePlayerOneNameChange = (event) => {
        setPlayerOneName(event.target.value)
        // console.log(playerOneName)
    }
    const handlePlayerTwoNameChange = (event) => {
        setPlayerTwoName(event.target.value)
        // console.log(playerTwoName)
    }
    const handlePlayerOneGameChoiceChange = (event) => {
        setPlayerOneGameChoice(event.target.value)
        // console.log(playerOneGameChoice)
    }
    const handlePlayerTwoGameChoiceChange = (event) => {
        setPlayerTwoGameChoice(event.target.value)
        // console.log(playerTwoGameChoice)
    }

    const handleGameFormSubmit = (event) => {
        event.preventDefault()
        console.log(playerOneName)
        console.log(playerTwoName)
        console.log(playerOneGameChoice)
        console.log(playerTwoGameChoice)
        runGameLogic(playerOneName, playerOneGameChoice, playerTwoName, playerTwoGameChoice)
    }

    
    const permitted_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock", "Shotgun", ""]
    const cpu_player_malcolm_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock"]
    const cpu_player_hannah_choices = ["Scissors", "Rock"]    // Spock always beats Hannah
    const cpu_player_chris_choices = ["Paper", "Lizard"]      // Scissors always beats Chris
    const cpu_players = ("Hal", "Morag", "Chris", "Hannah", "Zsolt", "Malcolm", "Harrison")


    function runGameLogic(player1Name, player1Choice, player2Name, player2Choice){

        
            if (player1Choice === "Paper") {
                setWinningChoice("Scissors")
            }
            else if (player1Choice === "Rock"){
                setWinningChoice("Paper")
            }
            else if (player1Choice === "Scissors"){
                setWinningChoice("Spock")
            }
            else if (player1Choice === "Lizard"){
                setWinningChoice("Rock")
            }
            else if (player1Choice === "Spock"){
                setWinningChoice("Lizard")
            }
            else if (player1Choice === "Shotgun"){
                setWinningChoice("Surrender")
            }
        
        

        if ( playerTwoName === "Cpu"){
        let playerTwoName = cpu_players[Math.floor(Math.random() * cpu_players.length)]
        }
        
        for (let choice of permitted_choices){
            if (playerTwoName === "Hal"){
                playerTwoGameChoice = "Paper"
            }
            else if (playerTwoName === "Morag"){
                playerTwoGameChoice = "Rock"
            }
            else if (playerTwoName === "Chris"){
                playerTwoGameChoice = cpu_player_chris_choices[Math.floor(Math.random() * cpu_player_chris_choices.length)]
            }
            else if (playerTwoName === "Hannah"){
                playerTwoGameChoice = cpu_player_hannah_choices[Math.floor(Math.random() * cpu_player_hannah_choices.length)]
            }
            else if (playerTwoName === "Zsolt"){
                playerTwoGameChoice = "Spock"
            }
            else if (playerTwoName === "Malcolm"){
                playerTwoGameChoice = cpu_player_malcolm_choices[Math.floor(Math.random() * cpu_player_malcolm_choices.length)]
            }
            else if (playerTwoName === "Harrison"){
                playerTwoGameChoice = winningChoice
            }
        }
        

        for (let choice of permitted_choices){
            if (player1Choice !==choice && playerTwoGameChoice !==choice){
                return `Both ${playerOneName} and ${playerTwoName} must pick from the permitted choices!`
            }
            else if (player1Choice !== choice){
                return `${playerOneName} must pick from the permitted choices!`
            }
            else if (playerTwoGameChoice !== choice){
                return `${playerTwoName} must pick from the permitted choices!`
            }
            else if (player1Choice === playerTwoGameChoice){
                return `Both ${playerOneName} and ${playerTwoName} have chosen ${player1Choice}. That means that it's a tie!`
            }
        } 
    

        for (let choice of permitted_choices){
            if(player1Choice === "Paper" && playerTwoGameChoice === "Rock"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Paper wraps Rock. ${playerOneName} wins!`     
            }
            else if (playerTwoGameChoice === "Scissors"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}.Scissors cut Paper.${playerTwoName} wins!`
            }
            else if (playerTwoGameChoice === "Lizard"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Lizard eats Paper. ${playerTwoName} Wins!`
            }
            else if (playerTwoGameChoice === "Spock"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Spock is disproved by Paper. ${playerOneName} Wins!`
            }
            else if (playerTwoGameChoice === "Shotgun"){
                return `${playerTwoName} must pick from the permitted choices!`
            }
            else if (playerTwoGameChoice === "Surrender"){
                return `${playerTwoName} must pick from the permitted choices!`
            }
        }
    

        for(let choice of permitted_choices){
            if (player1Choice === "Rock" && playerTwoGameChoice === "Scissors"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Rock crushes Scissors. ${playerOneName} wins!`
            }
            else if (playerTwoGameChoice === "Paper"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Paper wraps Rock. ${playerTwoName} wins!`
            }
            else if (playerTwoGameChoice === "Lizard"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Rock crushes Lizard. ${playerOneName} wins!`
            }
            else if (playerTwoGameChoice === "Spock"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Spock vaporises Rock. ${playerTwoName} wins!`
            }
            else if (playerTwoGameChoice === "Shotgun"){
                return `${playerTwoName} must pick from the permitted choices!`
            }
            else if (playerTwoGameChoice === "Surrender"){
                return `${playerTwoName} must pick from the permitted choices!`
            } 
        }
        

        for (let choice of permitted_choices){
            if (playerTwoGameChoice === "Paper" && player1Choice === "Scissors"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Scissors cut Paper. ${playerOneName} wins!`
        }
            else if (playerTwoGameChoice === "Rock"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Rock crushes Scissors. ${playerTwoName} wins!`
            }        
            else if (playerTwoGameChoice === "Lizard"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Lizard is decapitated by Scissors. ${playerOneName} wins!`
            }
            else if (playerTwoGameChoice === "Spock"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Spock smashes Scissors. ${playerTwoName} wins!`
            }
            else if (playerTwoGameChoice === "Shotgun"){
                return `${playerTwoName} must pick from the permitted choices!`
            }
            else if (playerTwoGameChoice === "Surrender"){
                return `${playerTwoName} must pick from the permitted choices!`
            }
            }

            for (let choice of permitted_choices){
                if (player1Choice === "Lizard" && playerTwoGameChoice === "Paper"){
                    return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Lizard eats Paper. ${playerOneName} wins!`
                }
                else if (playerTwoGameChoice === "Rock"){
                    return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Rock crushes Lizard. ${playerTwoName} wins!`
                }
                else if (playerTwoGameChoice === "Scissors"){
                    return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Scissors decapitate Lizard. ${playerTwoName} wins!`
                }
                else if (playerTwoGameChoice === "Spock"){
                    return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Lizard poisons Spock. ${playerOneName} wins!`
                }
                else if (playerTwoGameChoice === "Shotgun"){
                    return `${playerTwoName} must pick from the permitted choices!`
                }
                else if (playerTwoGameChoice === "Surrender"){
                    return `${playerTwoName} must pick from the permitted choices!`
                }
            }
        
        
        for(let choice of permitted_choices){
            if (player1Choice === "Spock" && playerTwoGameChoice === "Paper"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Paper disproves Spock. ${playerTwoName} wins!`
            }
            else if (playerTwoGameChoice === "Rock"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Spock vaporises Rock. ${playerOneName} wins!`
            }
            else if (playerTwoGameChoice === "Scissors"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Spock smashes Scissors. ${playerOneName} wins!`
            }
            else if (playerTwoGameChoice === "Lizard"){
                return `${playerOneName} chose ${player1Choice}. ${playerTwoName} chose ${playerTwoGameChoice}. Lizard poisons Spock. ${playerTwoName} wins!`
            }
            
            else if (playerTwoGameChoice === "Shotgun"){
                return `${playerTwoName} must pick from the permitted choices!`
            }
            else if (playerTwoGameChoice === "Surrender"){
                return `${playerTwoName} must pick from the permitted choices!`
            }
        }
        
        for (let choice of permitted_choices){
            if (player1Choice === "Shotgun" && playerTwoName === "Harrison"){
                return `${playerOneName} chose ${player1Choice} because ${playerTwoName} is cheating. ${playerTwoName} chose ${playerTwoGameChoice}. ${playerOneName} wins!`
            }
            else if (playerTwoName !== "Harrison"){
                return `${playerOneName} must pick from the permitted choices!`
            }
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
                <br></br>

                <label for="player_2_weapon">Weapon:</label>
                <input type="text" name="player_2_weapon" id="player_2_weapon" placeholder="select your weapon"
                value={ playerTwoGameChoice }
                onChange={ handlePlayerTwoGameChoiceChange }/>
                <br></br>
                <br></br>

                <label for="cpu_player">CPU Player?</label>
                <input type="checkbox" name="cpu_player?" id="cpu_player?"></input>
                <input type="submit" value="Play Game!"/>
                <br></br>
                <br></br>


            </form>
              
        </>
    )
};

export default PRS;