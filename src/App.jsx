import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginForm from './Pages/LoginRegister/LoginForm';
import RegisterForm from './Pages/LoginRegister/RegisterForm';
import Admin from './Pages/Admin/AdminUtama'
import './App.css';

 function App() {
  return(
    <Router>
      <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
