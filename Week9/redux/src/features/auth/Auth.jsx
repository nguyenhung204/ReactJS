import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from './authSlice';

function Auth() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const themeMode = useSelector((state) => state.theme.mode);
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
    <div className={`rounded-lg shadow-md p-6 ${
      themeMode === 'light' 
        ? 'bg-white border border-gray-200' 
        : 'bg-gray-800 border border-gray-700'
    }`}>
      <h2 className="text-2xl font-semibold mb-4">5. User Authentication</h2>
      
      {isLoggedIn ? (
        <div className="flex flex-col items-center">
          <div className={`w-full mb-6 p-4 rounded-lg ${
            themeMode === 'light'
              ? 'bg-blue-50 border border-blue-200'
              : 'bg-blue-900/30 border border-blue-800'
          }`}>
            <h3 className={`text-xl font-medium mb-2 ${
              themeMode === 'light' ? 'text-blue-700' : 'text-blue-300'
            }`}>
              Welcome, {user.username}!
            </h3>
            <p className={themeMode === 'light' ? 'text-blue-600' : 'text-blue-400'}>
              Email: {user.email}
            </p>
          </div>
          
          <div className="w-full">
            <form onSubmit={handleUpdateInfo} className="mb-4">
              <h4 className={`font-medium mb-3 ${
                themeMode === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Update Profile
              </h4>
              <div className="space-y-3">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="New username"
                  className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
                    themeMode === 'light'
                      ? 'bg-white border-gray-300 focus:ring-blue-500 text-gray-800'
                      : 'bg-gray-700 border-gray-600 focus:ring-blue-400 text-gray-100'
                  }`}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="New email"
                  className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
                    themeMode === 'light'
                      ? 'bg-white border-gray-300 focus:ring-blue-500 text-gray-800'
                      : 'bg-gray-700 border-gray-600 focus:ring-blue-400 text-gray-100'
                  }`}
                />
                <button 
                  type="submit"
                  className={`w-full px-4 py-2 rounded-md transition-all ${
                    themeMode === 'light'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-400 text-white'
                  }`}
                >
                  Update Info
                </button>
              </div>
            </form>
            
            <button 
              onClick={handleLogout} 
              className={`w-full px-4 py-2 rounded-md transition-all ${
                themeMode === 'light'
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-500 hover:bg-red-400 text-white'
              }`}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="max-w-md mx-auto">
          <h3 className={`text-xl font-medium mb-4 ${
            themeMode === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Login
          </h3>
          <div className="space-y-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
                themeMode === 'light'
                  ? 'bg-white border-gray-300 focus:ring-blue-500 text-gray-800'
                  : 'bg-gray-700 border-gray-600 focus:ring-blue-400 text-gray-100'
              }`}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
                themeMode === 'light'
                  ? 'bg-white border-gray-300 focus:ring-blue-500 text-gray-800'
                  : 'bg-gray-700 border-gray-600 focus:ring-blue-400 text-gray-100'
              }`}
            />
            <button 
              type="submit"
              className={`w-full px-4 py-2 rounded-md transition-all ${
                themeMode === 'light'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              }`}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Auth;