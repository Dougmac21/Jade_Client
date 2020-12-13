import { useState, useEffect } from 'react';


function TestCors() {

    const url = "http://localhost:8080/players";

    let registeredPlayers = [];

    function fetchRegisteredPlayers() {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data.name)
            })
    };

    async function handleNameSubmit(event) {
        event.preventDefault();
        const { name } = event.target.elements
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.value })
        });
        // if (response){
        // }
    };


    useEffect(() => {
        fetchData()

    }, [])

    function fetchData() {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    };



    return (
        <>
            <form onSubmit={handleNameSubmit}>
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

export default TestCors;