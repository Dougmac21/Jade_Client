import { useEffect, useRef } from 'react';


function PlayerLogin() {

    const url = "http://localhost:8080/players";
    const loginFormRef = useRef(null);
    let registeredPlayersList = [];
    let registeredPasswordsList = [];
    let registeredPlayersObjectsList = [];
       
    
    useEffect(() => {
        fetchData()
    }, [])


    function fetchData() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const registeredPlayersObjects = [].concat(data);
            // console.log(registeredPlayersObjects)
            registeredPlayersObjectsList = registeredPlayersObjects;
            console.log(registeredPlayersObjectsList);

            const registeredPlayers = data.map(({name}) => name);
            // console.log(registeredPlayers);
            registeredPlayersList = registeredPlayers;
            // console.log(registeredPlayersList);

            const registeredPasswords = data.map(({password}) => password);
            // console.log(registeredPasswords);
            registeredPasswordsList = registeredPasswords;
            // console.log(registeredPasswordsList);
        })
    }


    async function handleLogin(event) {
        event.preventDefault();
        const { name } = event.target.elements
        console.log(name)

        for (let anyName of registeredPlayersList){
            for (let anyPassword of registeredPasswordsList){
                if (name.value === anyName && password.value === anyPassword){
                    alert(`Login Successful. Welcome back to the arcade ${name.value}.`)
                    login(name.value)
                    loginFormRef.current.reset()
                    return
                }
            }
        }

        for (let anyName of registeredPlayersList){
            // console.log(anyName);
            if (name.value === anyName){
                alert("Name is already registered. Please select another name.")
                loginFormRef.current.reset()
                return
            }
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.value })
        });
        if (response){
            fetchData()
            loginFormRef.current.reset()
        }
    };

    function login(username){
        return
    }



    return (
        <>
            <form onSubmit={handleLogin} ref={loginFormRef}>

                <p>Arcade Login</p>
                <input
                    required type="text" placeholder="username" name="name" id="name">
                </input>
                <input 
                    required type="password" placeholder="password" name="password" id="password">
                </input>
                <input
                    type="submit" value="Login" >
                </input>
            </form>


            <br></br>
            <br></br>
            

            <form onSubmit={handleRegister} ref={registerFormRef}>

                <p>Register Player</p>
                <input
                    required type="text" placeholder="username" name="name" id="name">
                </input>
                <input 
                    required type="password" placeholder="password" name="password" id="password">
                </input>
                <input
                    type="submit" value="Login" >
                </input>
            </form>
        </>
    )
};


export default PlayerLogin;