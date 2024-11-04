import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import './App.css';
import Players from './components/Players';
import Clubs from './components/Clubs';
import Login from './components/Login'; 
import Register from './components/Register';

// Header Component
function Header({ isLoggedIn, handleLogout }) {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-title">Player by Player</Link> {/* Enlace a la página principal */}
        <div className="icons-container">
          <div className="icon">💰</div>
          <div className="icon">🖼️</div>
          <div className="icon">🎥</div>
        </div>
        <div className="button-group">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="header-button">Usuario</button>
          ) : (
            <>
              <Link to="/login" className="header-button">Iniciar Sesión</Link>
              <Link to="/register" className="header-button">Crear Usuario</Link>
            </>
          )}
        </div>
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
    <Router>
      <div className="estructura">
        <Header />
        <Competitions />
        <Routes>
          <Route path="/" element={
            <>
              <Clubs />
              <Players /> {/* Mostrar todos los jugadores en el home */}
            </>
          } />
          <Route path="/club/:clubId" element={<Players />} /> {/* Mostrar jugadores filtrados por club */}
          <Route path="/login" element={<Login />} /> {/* Página de Iniciar Sesión */}
          <Route path="/register" element={<Register />} /> {/* Ruta de registro */}
        </Routes>
        <footer>Footer Content</footer>
      </div>
    </Router>
  );
}

export default App;
