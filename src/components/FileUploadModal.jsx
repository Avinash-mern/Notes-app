// src/components/FileUploadModal.jsx
import React, { useState } from 'react';

export default function FileUploadModal({ onClose }) {
  const [educatorName, setEducatorName] = useState('');
  const [batchName, setBatchName] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleUpload = async () => {
    const uploadTime = new Date().toISOString(); // ISO format timestamp

    // Use FormData instead of JSON to avoid CORS issues with Apps Script
    const formData = new FormData();
    formData.append('educatorName', educatorName);
    formData.append('batchName', batchName);
    formData.append('fileUrl', fileUrl);
    formData.append('uploadTime', uploadTime);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw65ZfeQnoohc6v9l5xQWxps3i7F09Oy2rz_n1ksBV0pv85Wl-ZwfWWLXXBYI0FMNRoEw/exec",
        {
          method: "POST",
          body: formData, // No Content-Type header needed!
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Uploaded successfully!");
        onClose();
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("An error occurred while uploading.");
    }
  };

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h5>Upload Notes</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Educator Name"
            value={educatorName}
            onChange={(e) => setEducatorName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Batch Name"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="File URL (e.g., Google Drive share link)"
            value={fileUrl}
            onChange={(e) => setFileUrl(e.target.value)}
          />
          <button className="btn btn-success me-2" onClick={handleUpload}>
            Upload
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
