//Component that handles authentication and authorization
import React, { useState } from 'react';

function AuthComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default AuthComponent;
