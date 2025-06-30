import React from 'react';

const Loading: React.FC = () => {
  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
  };

  return <div style={style}>Loading...</div>;
};

export default Loading;