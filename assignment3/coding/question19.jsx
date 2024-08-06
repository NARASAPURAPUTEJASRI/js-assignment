//React component implementing a tooltip

import React, { useState } from 'react';

function TooltipComponent() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover me
      </button>
      {showTooltip && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          padding: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
          Tooltip text
        </div>
      )}
    </div>
  );
}

export default TooltipComponent;
