function PRS() {

    function capitaliseFirstLetterOfString(string){
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    let playerOneName = capitaliseFirstLetterOfString(playerOneNameInput)
    let playerTwoName = capitaliseFirstLetterOfString(playerTwoNameInput)
    let playerOneGameChoice = capitaliseFirstLetterOfString(playerOneGameChoiceInput)
    let playerTwoGameChoice = capitaliseFirstLetterOfString(playerTwoGameChoiceInput)
    let playerOneScore = 0
    let playerTwoScore = 0

    
    const permitted_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock", "Shotgun"]
    const cpu_player_malcolm_choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock"]
    const cpu_player_hannah_choices = ["Scissors", "Rock"]    // Spock always beats Hannah
    const cpu_player_chris_choices = ["Paper", "Lizard"]      // Scissors always beats Chris
    const cpu_players = ("Hal", "Morag", "Chris", "Hannah", "Zsolt", "Malcolm", "Harrison")


    if (playerOneGameChoice == "Paper"){
        winningChoice = "Scissors"
    }
    else if (playerOneGameChoice == "Rock"){
        winningChoice = "Paper"
    }
    else if (playerOneGameChoice == "Scissors"){
        winningChoice = "Spock"
    }
    else if (playerOneGameChoice == "Lizard"){
        winningChoice = "Rock"
    }
    else if (playerOneGameChoice == "Spock"){
        winningChoice = "Lizard"
    }
    else if (playerOneGameChoice == "Shotgun"){
        winningChoice = "Surrender"
    }


    if (playerTwoName == "Cpu"){
        playerTwoName = cpu_players[Math.floor(Math.random() * cpu_players.length)]
    }
    
        
    if (playerTwoName == "Hal"){
        playerTwoGameChoice = "Paper"
    }
    else if (playerTwoName == "Morag"){
        playerTwoGameChoice = "Rock"
    }
    else if (playerTwoName == "Chris"){
        playerTwoGameChoice = cpu_player_chris_choices[Math.floor(Math.random() * cpu_player_chris_choices.length)]
    }
    else if (playerTwoName == "Hannah"){
        playerTwoGameChoice = cpu_player_hannah_choices[Math.floor(Math.random() * cpu_player_hannah_choices.length)]
    }
    else if (playerTwoName == "Zsolt"){
        playerTwoGameChoice = "Spock"
    }
    else if (playerTwoName == "Malcolm"){
        playerTwoGameChoice = cpu_player_malcolm_choices[Math.floor(Math.random() * cpu_player_malcolm_choices.length)]
    }
    else if (playerTwoName == "Harrison"){
        playerTwoGameChoice = winningChoice
    }

    for (choice of permitted_choices){
        if (playerOneGameChoice !=choice && playerTwoGameChoice !=choice){
            return `Both ${playerOneName} and ${playerTwoName} must pick from the permitted choices!`
        }
        else if (playerOneGameChoice != choice){
            return `${playerOneName} must pick from the permitted choices!`
        }
        else if (playerTwoGameChoice != choice){
            return `${playerTwoName} must pick from the permitted choices!`
        }
        else if (playerOneGameChoice == playerTwoGameChoice){
            return `Both ${playerOneName} and ${playerTwoName} have chosen ${playerOneGameChoice}. That means that it's a tie!`
        }
    } 
   

    for (choice of permitted_choices){
        if(playerOneGameChoice == "Paper" && playerTwoGameChoice == "Rock"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGamechoice}. Paper wraps Rock. ${playerOneName} wins!`     
        }
        else if (playerTwoGameChoice == "Scissors"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}.Scissors cut Paper.${playerTwoName} wins!`
        }
        else if (playerTwoGameChoice == "Lizard"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Lizard eats Paper. ${playerTwoName} Wins!`
        }
        else if (playerTwoGameChoice == "Spock"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Spock is disproved by Paper. ${playerOneName} Wins!`
        }
        else if (playerTwoGameChoice == "Shotgun"){
            return `${playerTwoName} must pick from the permitted choices!`
        }
        else if (playerTwoGameChoice == "Surrender"){
            return `${playerTwoName} must pick from the permitted choices!`
        }
    }
   

    for(choice of permitted_choices){
        if (playerOneGameChoice == "Rock" && playerTwoGameChoice == "Scissors"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Rock crushes Scissors. ${playerOneName} wins!`
        }
        else if (playerTwoGameChoice == "Paper"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Paper wraps Rock. ${playerTwoName} wins!`
        }
        else if (playerTwoGameChoice == "Lizard"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Rock crushes Lizard. ${playerOneName} wins!`
        }
        else if (playerTwoGameChoice == "Spock"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Spock vaporises Rock. ${playerTwoName} wins!`
        }
        else if (playerTwoGameChoice == "Shotgun"){
            return `${playerTwoName} must pick from the permitted choices!`
        }
        else if (playerTwoGameChoice == "Surrender"){
            return `${playerTwoName} must pick from the permitted choices!`
        } 
    }
    

       for (choice of permitted_choices){
        if (playerTwoGameChoice == "Paper" && playerOneGameChoice == "Scissors"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Scissors cut Paper. ${playerOneName} wins!`
       }
        else if (playerTwoGameChoice == "Rock"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Rock crushes Scissors. ${playerTwoName} wins!`
        }        
        else if (playerTwoGameChoice == "Lizard"){
            return `${playerOneName} chose ${playerOneGameChoice}. ${playerTwoName} chose ${playerTwoGameChoice}. Lizard is decapitated by Scissors. ${playerOneName} wins!`
        }
        }

            
        }
       
        else if (playerTwoGameChoice == "Spock"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Spock smashes Scissors. {playerTwoName} wins!"
        }
        else if (playerTwoGameChoice == "Shotgun"){
            return f"{playerTwoName} must pick from the permitted choices!"
        }
        else if (playerTwoGameChoice == "Surrender"){
            return f"{playerTwoName} must pick from the permitted choices!"
        }

    else if (playerOneGameChoice == "Lizard"){
        if (playerTwoGameChoice == "Paper"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Lizard eats Paper. {playerOneName} wins!"
        }
        else if (playerTwoGameChoice == "Rock"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Rock crushes Lizard. {playerTwoName} wins!"
        }
        else if (playerTwoGameChoice == "Scissors"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Scissors decapitate Lizard. {playerTwoName} wins!"
        }
        else if (playerTwoGameChoice == "Spock"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Lizard poisons Spock. {playerOneName} wins!"
        }
        else if (playerTwoGameChoice == "Shotgun"){
            return f"{playerTwoName} must pick from the permitted choices!"
        }
        else if (playerTwoGameChoice == "Surrender"){
            return f"{playerTwoName} must pick from the permitted choices!"
        }

    else if (playerOneGameChoice == "Spock"){
        if (playerTwoGameChoice == "Paper"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Paper disproves Spock. {playerTwoName} wins!"
        }
        else if (playerTwoGameChoice == "Rock"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Spock vaporises Rock. {playerOneName} wins!"
        }
        else if (playerTwoGameChoice == "Scissors"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Spock smashes Scissors. {playerOneName} wins!"
        }
        else if (playerTwoGameChoice == "Lizard"){
            return f"{playerOneName} chose {playerOneGameChoice}. {playerTwoName} chose {playerTwoGameChoice}. Lizard poisons Spock. {playerTwoName} wins!"
        }
        else if (playerTwoGameChoice == "Shotgun"){
            return f"{playerTwoName} must pick from the permitted choices!"
        }
        else if (playerTwoGameChoice == "Surrender"){
            return f"{playerTwoName} must pick from the permitted choices!"
        }

    else if (playerOneGameChoice == "Shotgun"){
        if (playerTwoName == "Harrison"){
            return "{playerOneName} chose {playerOneGameChoice} because {playerTwoName} is cheating. {playerTwoName} chose {playerTwoGameChoice}. {playerOneName} wins!"
        }
        else if (playerTwoName != "Harrison"){
            return "{playerOneName} must pick from the permitted choices!"
        }


}

    return(
        <>
            <p>PRS component</p>

            <form action="/play" method="POST">
                <label for="player_1">Player 1 Name:</label>
                <input type="text" name="player_1" id="player_1">
                <br>
            
                <label for="player_1_weapon">Player 1 Weapon:</label>
                <input type="text" name="name" id="name">
                <br>
                <br>
            
                <label for="player_2_name">Player 2 Name</label>
                <input type="text" name="attendees" id="attendees">
                <br>
            
                <label for="player_2_weapon">Player 2 Weapon</label>
                <input type="text" name="location" id="location">
                <br>
                <br>
            
                <label for="cpu_player">Cpu Player?</label>
                <input type="checkbox" name="cpu_player?" id="cpu_player?">
                <br>
                <br>
                <br>
                
                <input type="submit" value="Play">
            </form>
              
        </>
    )
};

export default PRS;