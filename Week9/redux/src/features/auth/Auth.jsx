import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from './authSlice';

function Auth() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && email.trim()) {
      dispatch(login({ username: username.trim(), email: email.trim() }));
      setUsername('');
      setEmail('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    if (username.trim() || email.trim()) {
      const updates = {};
      if (username.trim()) updates.username = username.trim();
      if (email.trim()) updates.email = email.trim();
      dispatch(setUserInfo(updates));
      setUsername('');
      setEmail('');
    }
  };

  return (
    <div className="feature-section">
      <h2>5. User Authentication</h2>
      
      {isLoggedIn ? (
        <div className="logged-in">
          <div className="user-info">
            <h3>Welcome, {user.username}!</h3>
            <p>Email: {user.email}</p>
          </div>
          
          <div className="user-actions">
            <form onSubmit={handleUpdateInfo} className="update-form">
              <h4>Update Profile</h4>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="New username"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="New email"
              />
              <button type="submit">Update Info</button>
            </form>
            
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <h3>Login</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Auth;