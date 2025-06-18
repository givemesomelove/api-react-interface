
import React, { useState, useEffect } from 'react';
import Create from './create';
import FindAll from './findAll';
import Join from './join';
import Clear from './clear';
import roomWs from '../../roomWs';
import { FloatingWindow } from '../../common/commonUI'; 

const useIoState = () => {
  const [state, setState] = useState(roomWs.stateStr())
  
  const handleStateUpdate = () => {
    console.log("收到通知：", roomWs.stateStr());
    setState(roomWs.stateStr());
  };

  useEffect(() => {
    handleStateUpdate();
    document.addEventListener('connectStateUpdate', handleStateUpdate);
    return () => {
      document.removeEventListener('connectStateUpdate', handleStateUpdate);
    };
  }, [])

  return state;
}

const RoomPage = () => {
  const state = useIoState();

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
      <FindAll />
      <Create />
      <Join />
      <Clear />
    </div>
  );
};

export default RoomPage;
