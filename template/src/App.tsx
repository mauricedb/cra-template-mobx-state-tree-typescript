import React from 'react';
import './App.css';
import logo from './logo.svg';
import { NumbersStoreProvider } from './contexts';

import AddNumber from './components/AddNumber';
import NumbersInfo from './components/NumbersInfo';
import NumbersList from './components/NumbersList';

const App: React.FC = () => {
  return (
    <NumbersStoreProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="MobX-state-tree logo" className="App-logo" />
          <h2>MobX-state-tree</h2>
        </div>
        <AddNumber />
        <NumbersInfo />
        <NumbersList />
        <p>
          <a
            href="https://mobx-state-tree.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn MobX-state-tree
          </a>
        </p>
      </div>
    </NumbersStoreProvider>
  );
};

export default App;
