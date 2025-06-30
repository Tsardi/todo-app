import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../auth/LoginButton';
import Loading from '../common/Loading';

const LoginPage: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  const pageStyle: React.CSSProperties = {
    textAlign: 'center',
    paddingTop: '50px',
  };

  return (
    <div style={pageStyle}>
      <h1>Welcome to the Task Management App</h1>
      <p>Please log in to manage your tasks.</p>
      <LoginButton />
    </div>
  );
};

export default LoginPage;