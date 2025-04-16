// src/pages/StudentDashboard.jsx
import React, { useEffect, useState } from 'react';
import FileList from '../components/FileList';

export default function StudentDashboard() {
  const userId = localStorage.getItem('userId');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbw65ZfeQnoohc6v9l5xQWxps3i7F09Oy2rz_n1ksBV0pv85Wl-ZwfWWLXXBYI0FMNRoEw/exec")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  if (!userId) return <div>Please log in</div>;

  return (
    <div className="container mt-5">
      <h3>Welcome to your dashboard, {userId}</h3>
      <h5>Available Notes</h5>
      <div className="row">
        {notes.map((note, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h6>{note.batchName}</h6>
              <p>By: {note.educatorName}</p>
              <p><small>{note.uploadTime}</small></p>
              <a href={note.fileUrl} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
