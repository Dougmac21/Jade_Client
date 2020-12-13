import './App.css';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamesContainer from './containers/GamesContainer';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/games" component={GamesContainer} />
        </Switch>
        <Footer />

      </>
    </Router>
    
    

    // <div className="App">
    //   <h1>This is App.js</h1>
    //   <MainContainer />
    // </div>
  );
}

export default App;




