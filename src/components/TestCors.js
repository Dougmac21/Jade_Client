import { useState, useEffect } from 'react';

const url = "http://localhost:8080/players"

function TestCors() {
    async function handleNameSubmit(event) {
        console.log("test")
        event.preventDefault();
        const { name } = event.target.elements
        debugger
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.value })
        });
        // if (response){
        // }
    }


    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {

        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }



    return (
        <>
            <form onSubmit={handleNameSubmit}>
                <input
                    type="text" placeholder="Insert name here" name="name">
                </input>
                <input
                    type="submit" value="Submit" >
                </input>
            </form>



        </>
    )
};

export default TestCors;