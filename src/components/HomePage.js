import { Link } from "react-router-dom";
import '../styles/HomePage.css';

function HomePage() {
    return (
        <>
            <div className="container">
                <h1 id="jade-arcade">JADE ARCADE</h1>
                <span id="start">
                    <Link to="/log-in" id="start-link">
                    START <span id="blink"><blink>□</blink></span>
                    </Link>
                </span>
            </div>
        </>

    )
}

export default HomePage;