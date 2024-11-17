import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTrainer, setIsTrainer] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password, isTrainer });
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-8">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mb-4">
          <input
            type="checkbox"
            checked={isTrainer}
            onChange={(e) => setIsTrainer(e.target.checked)}
          />{' '}
          Register as a Trainer
        </div>
        <button className="bg-blue-600 text-white w-full py-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
