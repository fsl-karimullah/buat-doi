import React,{Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import ButtonPage from './components/ButtonPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/button" component={ButtonPage}/>
            <Route exact path='/hbdbeb' component={LandingPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
