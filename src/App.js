import './App.css';
import MainContainer from './containers/MainContainer';
import GamesContainer from './containers/GamesContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';





function App() {
  return (
    
  <Router>
    <>
      <Header />
      <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/games" component={GamesContainer} />
      {/* <Route component={ErrorPage}/> */}
      </Switch>
    </>
  </Router>

    // <div className="App">
    //   <h1>This is App.js</h1>
    //   <MainContainer />
    // </div>
  );
}

export default App;




