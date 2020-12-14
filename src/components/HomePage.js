import { Link } from "react-router-dom";
import '../styles/HomePage.css';

function HomePage() {
    return (
        <>
            <div className="container">
                <img src="/background.jpg" alt="" id="background" />
                <h1 id="jade-arcade">JADE ARCADE</h1>
                <p id="start">
                    <Link to="/log-in" id="start-link">
                        START
                    </Link>
                </p>
            </div>
        </>

    )
}

export default HomePage;