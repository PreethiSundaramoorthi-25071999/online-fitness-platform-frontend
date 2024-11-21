
//4
import React, { useState } from 'react';
import axios from 'axios';
import { FaDumbbell } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('member'); // Default to 'member'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://online-fitness-platform-backend.onrender.com/api/users/signup', { name, email, password, type });
      console.log(data.user);

      // Store the token in local storage
      localStorage.setItem('token', data.token);

      // Navigate based on the user's role
      if (data?.user?.role === 'member') {
        navigate('/MemberDashboard');
      } else if (data?.user?.role === 'trainer') {
        navigate('/TrainerDashboard');
      } else {
        console.error("Unknown role: ", data?.user?.role);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Fitness Platform Header */}
      <header className="bg-blue-600 text-white flex py-4 px-6 text-left text-2xl font-bold items-center">
        <FaDumbbell className="mr-2" /> {/* Dumbbell icon with margin */}
        Fitness Platform
      </header>
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

        {/* User Type Selection */}
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="type"
              value="trainer"
              checked={type === 'trainer'}
              onChange={() => setType('trainer')}
              className="mr-2"
            />
            Trainer
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="member"
              checked={type === 'member'}
              onChange={() => setType('member')}
              className="mr-2"
            />
            Member
          </label>
        </div>

        <button type="submit" className="bg-blue-600 text-white w-full py-2 mt-4">Register</button>
      </form>
    </div>
  );
};

export default Register;
