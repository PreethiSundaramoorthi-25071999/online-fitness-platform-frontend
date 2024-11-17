import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">Fitness Platform</Link>
        </h1>
        <nav>
          <Link to="/classes" className="mr-8">Classes</Link>
          <Link to="/schedule" className="mr-8">Schedule</Link>
          <Link to="/trainers" className="mr-8">Trainers</Link>
          <Link to="/login">Login</Link>  
        </nav>
      </div>
    </header>
  );
};

export default Header;
