import React, { useState, useEffect, useRef } from 'react';
import './App.css';

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
    { imgSrc: './laliga.png', name: 'La Liga' },
    { imgSrc: './champios.png', name: 'Champions League' },
    { imgSrc: './premier.png', name: 'Premier League' }
  ];

  return (
    <section className="competitions">
      {competitions.map((comp, index) => (
        <div className="competition" key={index}>
          <img src={comp.imgSrc} alt={comp.name} />
          <p>{comp.name}</p>
        </div>
      ))}
    </section>
  );
}

// Players Component with Card Flip
function Players() {
  const [players, setPlayers] = useState([]);
  const [flippedCards, setFlippedCards] = useState({}); 
  const loadMoreRef = useRef(null); 

  useEffect(() => {
    // Aquí podrías cargar los jugadores desde un archivo JSON o API.
    fetch('/players.json') 
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error loading players:", error));
  }, []);

  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index] 
    }));
  };

  return (
    <section className="players">
      {players.length === 0 ? (
        <p>Cargando jugadores...</p>
      ) : (
        players.map((player, index) => (
          <div
            className={`player-card ${flippedCards[index] ? 'flipped' : ''}`}
            key={index}
            onClick={() => handleFlip(index)}
          >
            <div className="player-card-front">
            <img
                src={player.imgSrc}
                alt={player.name}
                className="player-image"
              />
              <h3>{player.name}</h3>
              <p>Position: {player.position}</p>
              <p>Team: {player.current_team}</p>
            </div>
            <div className="player-card-back">
              <p>Age: {player.age}</p>
              <p>Nationality: {player.nationality}</p>
              <p>Goals 2024: {player.goals_2024}</p>
              <p>Assists: {player.assists}</p>
              <p>Height: {player.height}</p>
              <p>Weight: {player.weight}</p>
              <p>Titles Won: {player.titles_won}</p>
              <p>Market Value: {player.market_value}</p>
            </div>
          </div>
        ))
      )}
      <div ref={loadMoreRef} className="load-more">
        {players.length > 0 && <p></p>}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="estructura">
      <Header />
      <Competitions />
      <Players />
      <footer>Footer Content</footer>
    </div>
  );
}

export default App;
