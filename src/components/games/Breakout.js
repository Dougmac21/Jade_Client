import Header from '../Header';
import Footer from '../Footer';

function Breakout() {


    return(
        <>
            <Header />

            <div align="center" className="breakout-container">
                <iframe class="inline-frame-breakout"
                title="Inline Frame Breakout"
                width="540"
                height="500"
                src="https://lod-js-breakout.herokuapp.com/" >
                </iframe>
            </div>

            <Footer />
        </>
    )


};

export default Breakout;





