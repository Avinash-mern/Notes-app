// src/pages/StudentLoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentLoginPage() {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);  // Start loading

    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbxQottd4BjbZtec2Am2sAGVpjI9A8KoKK0Ks_4Pw0X5Q8vT6h-NfXFDIgOYX0dJpoe9/exec?userId=${userId}`
    );
    const data = await response.json();

    setLoading(false);  // Stop loading

    if (data.error) {
      alert('Invalid UserID');
    } else if (data.role === 'student') {
      localStorage.setItem('userId', data.userId);
      navigate('/dashboard');
    } else {
      alert('Invalid student credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Student Login</h2>
      {loading ? (  // Show loading spinner or message
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Please wait...</p>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>UserID</label>
            <input 
              type="text" 
              className="form-control" 
              required 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      )}
    </div>
  );
}




