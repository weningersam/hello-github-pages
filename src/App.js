import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage.js';
import PortfolioPage from './pages/portfolioPage.js';


function App() {
  return (
    <div>
      {/*Routing logic*/}
      <HashRouter basename="/">
        <Switch>
          <Route path={"/"} exact render={(props) => <MainPage {...props}/>}/>
          <Route path={"/example/:id"} render={(props) => <PortfolioPage {...props}/>}/>
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
