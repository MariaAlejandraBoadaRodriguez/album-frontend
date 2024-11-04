// src/components/Clubs.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Clubs() {
    const [clubs, setClubs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener los clubes desde la API
        fetch('http://localhost:3302/api/clubs')
            .then((response) => response.json())
            .then((data) => setClubs(data.data))
            .catch((error) => console.error("Error al cargar los clubes:", error));
    }, []);

    const handleClubClick = (clubId) => {
        navigate(`/club/${clubId}`);
    };

    return (
        <section className="clubs">
            <div className="club-list">
                {clubs.map((club) => (
                    <div key={club.id} className="club" onClick={() => handleClubClick(club.id)}>
                        <img src={club.shield} alt={club.name} className="club-shield" />
                        <h3>{club.name}</h3>
                        <p>Año de Creación: {club.year_creation}</p>
                        <p>Títulos Ganados: {club.titles_won}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Clubs;
