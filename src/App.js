import './App.css';
import React from 'react';
import Home from './Home';
import Signup from './Signup';
import NavBar from './NavBar';
import Trails from './Trails';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup {...props} />} />
        <Route exact path="/trails" render={(props) => <Trails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
