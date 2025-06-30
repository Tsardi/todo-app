import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../auth/LogoutButton';

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  const headerStyle: React.CSSProperties = {
    background: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={linkStyle}>
        <h1>Task Manager</h1>
      </Link>
      <nav>
        {isAuthenticated && (
          <>
            <Link to="/" style={linkStyle}>Dashboard</Link>
            <Link to="/create" style={linkStyle}>Create Task</Link>
            <LogoutButton />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;