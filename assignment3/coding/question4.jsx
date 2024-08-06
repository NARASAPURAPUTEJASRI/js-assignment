//Component that handles form submission and validation
import React, { useState } from 'react';

function Form() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setError('Input cannot be empty');
    } else {
      setError('');
      alert(`Form submitted with input: ${input}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
