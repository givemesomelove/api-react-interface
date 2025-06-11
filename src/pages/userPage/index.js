
import React from 'react';
import Register from './register';
import Login from './login';
import Find from './find';

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
      <Find />
    </div>
  );
};

export default UserPage;
