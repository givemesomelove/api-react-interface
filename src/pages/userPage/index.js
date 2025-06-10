
import React from 'react';
import Register from './register';
import Login from './login';

const UserPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      gap: '20px'
    }}>
      <Register />
      <Login />
    </div>
  );
};

export default UserPage;
