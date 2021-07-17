import React from "react";

// importing Router for Routes below
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// importing Componets for routes
import HomePage from './components/HomePage';
import PizzaForm from './components/PizzaForm';
import ConfirmationPage from './components/HomePage';

const App = () => {
  return (
    <>
      <h1>Primo Pizza Eats</h1>
      <div>
        <Router>
          <Switch>

            <Route exact path={"/"}>
              <HomePage />
            </Route>

            <Route path={"/pizza"}>
              <PizzaForm />
            </Route>

            <Route path={"/confirmation"}>
              <ConfirmationPage />
            </Route>

          </Switch>
        </Router>  
      </div>
    </>
  );
};
export default App;
