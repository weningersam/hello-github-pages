import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage.js';
import PortfolioPage from './pages/portfolioPage.js';


function App() {
  return (
    <div>
      {/*Routing logic*/}
      <BrowserRouter basename="hello-github-pages">
        <Switch>
          <Route path="/" exact render={(props) => <MainPage {...props}/>}/>
          <Route path="/example/:id" render={(props) => <PortfolioPage {...props}/>}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
