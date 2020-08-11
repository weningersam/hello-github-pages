import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/mainPage.jsx';
import ProjectsListPage from './pages/projectListPage.jsx';
import ContactPage from './pages/contactPage.jsx';
import AboutPage from './pages/aboutPage.jsx';
import ProjectIndividualPage from './pages/projectIndividualPage.jsx';

import Header from './components/Header.jsx';
import './App.css';


function App() {
  return (
    <div>
      <Header/>

      <HashRouter basename="/">
        <Switch>
          <Route exact path={"/"} render={() => {return(<MainPage/>);}}/>
          <Route exact path={"/projects"} render={() => {return(<ProjectsListPage/>);}}/>
          <Route exact path={"/contact"} render={() => {return(<ContactPage/>);}}/>
          <Route exact path={"/about"} render={() => {return(<AboutPage/>);}} />
          <Route exact path={"/example/:id"} render={(props) => <ProjectIndividualPage {...props}/>}/>
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
