import React from 'react';
import './App.css';
import Players from './components/Players';
import Clubs from './components/Clubs';

// Header Component
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="icon">💰</div>
        <div className="icon">🖼️</div>
        <div className="icon">🎥</div>
        <div className="icon">🛒</div>
      </div>
    </header>
  );
}

// Competitions Component
function Competitions() {
  const competitions = [
    { id: 1, imgSrc: './laliga.png', name: 'La Liga' },
    { id: 2, imgSrc: './champios.png', name: 'Champions League' },
    { id: 3, imgSrc: './premier.png', name: 'Premier League' }
  ];

  return (
    <section className="competitions">
      {competitions.map((comp) => (
        <div className="competition" key={comp.id}>
          <img src={comp.imgSrc} alt={comp.name} />
          <p>{comp.name}</p>
        </div>
      ))}
    </section>
  );
}


function App() {
  return (
    <div className="estructura">
      <Header />
      <Competitions />
      <Clubs />
      <Players />
      <footer>Footer Content</footer>
    </div>
  );
}

export default App;
