import React from 'react';
import './App.scss';
import { Counter } from './Counter';

function App() {
  return React.createElement('div', { className: 'App flex align-center justify-center p4' }, [
    React.createElement(Counter)
  ])
}

export default App;
