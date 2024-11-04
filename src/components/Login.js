import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Para mostrar el mensaje de éxito o error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Limpiar el mensaje al enviar el formulario
    try {
      const response = await axios.post('http://localhost:3302/api/users/login', {
        email: email,
        password: password
      });
      setMessage(response.data.message); // Mensaje de éxito
      localStorage.setItem('token', response.data.token); // Guardar el token en localStorage
      navigate('/'); // Redirige al usuario a la página principal
    } catch (err) {
      // Mostrar mensaje de error
      setMessage(err.response?.data?.error || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="page-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {message && <p className={message === 'Inicio de sesión exitoso' ? 'success-message' : 'error-message'}>{message}</p>}
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
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
