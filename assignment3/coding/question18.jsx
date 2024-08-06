//React component using React Ref for DOM manipulation

import React, { useRef } from 'react';

function RefComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default RefComponent;
