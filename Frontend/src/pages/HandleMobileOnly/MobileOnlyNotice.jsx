import React, { useState } from 'react';
import './MobileOnlyNotice.css';

const MobileOnlyNotice = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="desktop-notice-overlay">
      <div className="desktop-notice-card">
        <div className="device-icon-container">
          <svg className="device-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
          </svg>
        </div>

        <h2>Best Experienced on Mobile</h2>
        <p>
          This app is designed specifically for mobile and tablet screens. Please open this link on your phone or tablet for the best experience.
        </p>

        <button className="copy-link-btn" onClick={handleCopyLink}>
          {copied ? '✓ Link Copied!' : 'Copy Link to Mobile'}
        </button>
      </div>
    </div>
  );
};

export default MobileOnlyNotice;