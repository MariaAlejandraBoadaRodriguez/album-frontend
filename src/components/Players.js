// src/components/Players.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlayerFactory from '../models/PlayerFactory.js';

function Players() {
    const { clubId } = useParams(); // Obtiene el clubId desde la URL si existe
    const [players, setPlayers] = useState([]);
    const [flippedCards, setFlippedCards] = useState({});

    useEffect(() => {
        // Define la URL de la API dependiendo de si existe clubId
        const url = clubId
            ? `http://localhost:3302/api/jugadores?club_id=${clubId}`
            : `http://localhost:3302/api/jugadores`;

        // Cargar los jugadores desde la API
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data) {
                    const playerInstances = data.data.map(playerData => PlayerFactory.createPlayer(playerData));
                    setPlayers(playerInstances);
                } else {
                    console.error("Estructura de datos incorrecta:", data);
                }
            })
            .catch((error) => console.error("Error al cargar los jugadores:", error));
    }, [clubId]); // Ejecutar de nuevo si el clubId cambia

    const handleFlip = (index) => {
        setFlippedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
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
                        key={player.id}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="player-card-front">
                            <img src={player.imgSrc} alt={player.name} className="player-image" />
                            <h3>{player.name}</h3>
                            <p>Position: {player.position}</p>
                            <p>Team: {player.club}</p>
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
        </section>
    );
}

export default Players;
