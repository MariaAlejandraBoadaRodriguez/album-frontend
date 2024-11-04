import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:3302/api/users/register', {
        email: email,
        password: password
      });
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/login'); // Redirige a la página de inicio de sesión después de registrarse
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error al registrar usuario');
    }
  };

  return (
    <div className="page-container">
      <form className="form-container" onSubmit={handleRegister}>
        <h2>Crear Usuario</h2>
        {message && <p className={message === 'Usuario registrado exitosamente' ? 'success-message' : 'error-message'}>{message}</p>}
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
