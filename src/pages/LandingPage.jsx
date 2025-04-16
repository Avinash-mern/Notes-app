// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLoginStudent = () => navigate('/student-login');
  const handleLoginEducator = () => navigate('/educator-login');

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Centralized Notes Sharing Platform for Students at Coding Thinker</h1>
      <div className="mt-4">
        <button className="btn btn-primary mx-2" onClick={handleLoginStudent}>Login as Student</button>
        <button className="btn btn-secondary mx-2" onClick={handleLoginEducator}>Login as Educator</button>
      </div>
    </div>
  );
}
