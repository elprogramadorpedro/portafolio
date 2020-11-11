import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { LandingPage } from './components/LandingPage';
import { PerfilPedro } from './PerfilPedro';
import { ProjetosExtras } from './ProjetosExtras';
import { FooterContato } from './FooterContato';

function App() {
  return (


  
     
     <Router>
     
     
        <Switch>

        <Route path="/perfil">
            <PerfilPedro/>
          </Route>
         
          <Route path="/projetos">
            <ProjetosExtras/>
          </Route>
        
          <Route path="/contato">
            <FooterContato/>
          </Route>

        <Route path="/">
            <LandingPage/>
          </Route>

        </Switch>

     
    </Router>

    

    
  );
}

export default App;
