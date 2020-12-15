import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/PlayerController.css'
import PRS from '../components/games/PRS';


function PlayerController() {

    const url = "http://localhost:8080/players";
    const formRef = useRef(null);
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

                const registeredPlayers = data.map(({ name }) => name);
                // console.log(registeredPlayers);
                registeredPlayersList = registeredPlayers;
                // console.log(registeredPlayersList);

                const registeredPasswords = data.map(({ password }) => password);
                // console.log(registeredPasswords);
                registeredPasswordsList = registeredPasswords;
                // console.log(registeredPasswordsList);
            })
    }


    async function handleNameSubmit(event) {
        event.preventDefault();
        const { name } = event.target.elements
        const { password } = event.target.elements

        for (let anyName of registeredPlayersList) {
            for (let anyPassword of registeredPasswordsList) {
                if (name.value === anyName && password.value === anyPassword) {
                    alert(`Login Successful. Welcome back to the arcade ${name.value}.`)
                    login(name.value)
                    formRef.current.reset()
                    return
                }
            }
        }

        for (let anyName of registeredPlayersList) {
            // console.log(anyName);
            if (name.value === anyName) {
                alert("Name is already registered. Please select another name.")
                formRef.current.reset()
                return
            }
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.value })
        });
        if (response) {
            fetchData()
            formRef.current.reset()
        }
    };

    function login(username) {
        return
    }



    return (
        <>
            <Header />
            <PRS />
            <form onSubmit={handleNameSubmit} ref={formRef} id="arcade-login">

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
            <Footer />
        </>
    )
};


export default PlayerController;