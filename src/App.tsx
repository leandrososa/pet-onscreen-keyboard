import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CommodoreKeypad } from './components/Keypad';
import './App.global.css';

const Hello = () => {
  return (
    <CommodoreKeypad></CommodoreKeypad>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
