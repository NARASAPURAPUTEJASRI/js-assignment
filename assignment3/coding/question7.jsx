//Component that uses React Hooks to manage state

import React, { useState } from 'react';

function StatefulComponent() {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
}

export default StatefulComponent;
