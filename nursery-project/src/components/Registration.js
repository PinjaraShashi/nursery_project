import React, { useState } from 'react';

const Registration = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Basic validation (you should perform more secure validation in a real application)
    if (username && password) {
      localStorage.setItem('loggedIn', 'true');
      onRegister();
    }
  };

  return (
    <div className="registration-form">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;