import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Card from './Components/Cards';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
