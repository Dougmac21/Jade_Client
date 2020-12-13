import { useEffect, useRef } from 'react';


function PlayerController() {

    const url = "http://localhost:8080/players";
    const formRef = useRef(null);
    let registeredPlayersList = [];
    let registeredPasswordsList = [];



    function fetchData() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const registeredPlayers = data.map(({name}) => name);
            console.log(registeredPlayers);

            const registeredPasswords = data.map(({password}) => password);
            console.log(registeredPasswords);

            registeredPlayersList = registeredPlayers;
            console.log(registeredPlayersList);

            registeredPasswordsList = registeredPasswords;
            console.log(registeredPasswordsList);
        })
    };


    async function handleNameSubmit(event) {
        event.preventDefault();
        const { name } = event.target.elements
        for (let anyName of registeredPlayersList){
            console.log(anyName);
            if (name.value === anyName){
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
        if (response){
            fetchData()
            formRef.current.reset()
        }
    };


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <form onSubmit={handleNameSubmit} ref={formRef}>
                <label for="select-player">Select Player:</label>
                <select name="select-player" id="select-player">
                    <option value="testName"></option>
                    <option value="testName2"></option>
                </select>

                <p>Register as a player:</p>
                <input
                    type="text" placeholder="username" name="name">
                </input>
                <input
                    type="submit" value="Submit" >
                </input>
            </form>
        </>
    )
};

export default PlayerController;