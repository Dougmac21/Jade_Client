import { useEffect, useRef } from 'react';


function TestCors() {

    const url = "http://localhost:8080/players";
    const formRef = useRef(null);

    let registeredPlayersList = [];

    async function handleNameSubmit(event) {
        event.preventDefault();
        const { name } = event.target.elements
        for (let anyName of registeredPlayersList){
            console.log(anyName);
            if (name.value === anyName){
                alert("Name is already registered. Choose Again.")
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

    

    function fetchData() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const registeredPlayers = data.map(({name}) => name);
            // console.log(registeredPlayers)
            registeredPlayersList = registeredPlayers;
            // console.log(registeredPlayersList)
        })
    };




    return (
        <>
            <form onSubmit={handleNameSubmit} ref={formRef}>
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