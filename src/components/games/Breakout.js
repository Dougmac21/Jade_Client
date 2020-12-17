import Header from '../Header';
import Footer from '../Footer';
import { useEffect, useState } from 'react';

function Breakout() {


    const scoreUrl = "http://localhost:8080/scores";
    const playerUrl = "http://localhost:8080/players";

    const [breakoutScores, setBreakoutScores] = useState([])
    const [registeredPlayersList, setRegisteredPlayersList] = useState([])
    const [registeredPasswordsList, setRegisteredPasswordsList] = useState([])
    const [registeredPlayersObjectsList, setRegisteredPlayersObjectsList] = useState([])


    useEffect(() => {
        fetchScoreData()
        fetchPlayerData()
    }, [])


    function fetchPlayerData() {
        fetch(playerUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setRegisteredPlayersObjectsList(data)
                console.log(registeredPlayersObjectsList);

                setRegisteredPlayersList(data.map(({ name }) => name))
                console.log(registeredPlayersList);

                setRegisteredPasswordsList(data.map(({ password }) => password))
                console.log(registeredPasswordsList);
            })
    }


    function fetchScoreData() {
        fetch(scoreUrl + "?gamename=breakout")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBreakoutScores(data.map(({ score }) => score))
                console.log(breakoutScores);
            })
    }



    return(
        <>
            <div className="breakout-page-container">
                <Header />
                <br/>
                <h1 id="header">Breakout</h1>
                <br/>
                    <div align="center" className="breakout-container">

                        <iframe
                        class="inline-frame-breakout"
                        id="breakout-frame"
                        title="Inline Frame Breakout"
                        width="540"
                        height="500"
                        src="https://lod-js-breakout.herokuapp.com/" >
                        </iframe>

                    </div>
                <Footer />
            </div>
        </>
    )


};

export default Breakout;