import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import data from './data/carInfo.json';

function App() {
  const refs = data.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  return (
    <div className="App">
      <Header refs={refs} data={data} />
      <Home refs={refs} data={data} />
    </div>
  );
}

export default App;
