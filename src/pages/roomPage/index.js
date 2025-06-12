
import React, { useState, useEffect } from 'react';
import Create from './create';
import io from '../../io';
import { FloatingWindow } from '../../common/commonUI'; 

const RoomPage = () => {

  const [state, setState] = useState(io.state);

  useEffect(() => {
    const handleConnect = () => setState(io.state);
    const handleDisconnect = () => setState(io.state);

    document.addEventListener('connect', handleConnect);
    document.addEventListener('disconnect', handleDisconnect);

    return () => {
      document.removeEventListener('connect', handleConnect);
      document.removeEventListener('disconnect', handleDisconnect);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      gap: '20px'
    }}>
      <FloatingWindow title={state}/>
      <Create />
    </div>
  );
};

export default RoomPage;
