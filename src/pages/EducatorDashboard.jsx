// src/pages/EducatorDashboard.jsx
import React, { useState } from 'react';
import FileUploadModal from '../components/FileUploadModal';

export default function EducatorDashboard() {
  const [showModal, setShowModal] = useState(false);
  const userId = localStorage.getItem('userId');

  if (!userId) return <div>Please log in</div>;

  return (
    <div className="container mt-5">
      <h3>Welcome to Coding Thinker, {userId}</h3>
      <p>You can create a new group and upload notes here.</p>

      {/* Floating "+" button */}
      <button
        className="btn btn-primary rounded-circle"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          fontSize: '24px',
        }}
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {showModal && <FileUploadModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
