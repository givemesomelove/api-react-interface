
import React from 'react';
import Create from './create';

const RoomPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      gap: '20px'
    }}>
      <Create />
    </div>
  );
};

export default RoomPage;
