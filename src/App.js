import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ClassList from './pages/ClassList';
import BookingPage from './pages/BookingPage';
import TrainerProfile from './pages/TrainerProfile';
import SchedulePage from './pages/SchedulePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Logout from './pages/Logout';
import BookaClass from './pages/BookaClass';
import ScheduleForm from './pages/Scheduleform';
// import TrainerHeader from './components/TrainerHeader';
import TrainerDashboard from './pages/TrainerDashboard';
import MemberDashboard from './pages/MemberDashboard';


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Nested routes for /dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="classes" element={<ClassList />} />
            <Route path="bookings" element={<BookingPage />} />
            <Route path="trainers" element={<TrainerProfile />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="logout" element={<Logout />} /> 
            <Route path="bookaclass" element={<BookaClass />} />
            <Route path="ScheduleForm" element={<ScheduleForm />} />
          </Route>

          {/* Nested routes for /dashboard */}
          <Route path="/TrainerDashboard" element={<TrainerDashboard />}>
              {/* Default route (index) loads BookaClass */}
              <Route index element={<ClassList />} />
              <Route path="classes" element={<ClassList />} />
              <Route path="ScheduleForm" element={<ScheduleForm />} />
              <Route path="logout" element={<Logout />} />
          </Route>

          {/* Nested routes for /dashboard */}
          <Route path="/MemberDashboard" element={<MemberDashboard />}>
            {/* Default route (index) loads BookaClass */}
            <Route index element={<BookaClass />} />
            <Route path="logout" element={<Logout />} /> 
            <Route path="bookaclass" element={<BookaClass />} />
            <Route path="bookings" element={<BookingPage />} />
            <Route path="trainers" element={<TrainerProfile />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

