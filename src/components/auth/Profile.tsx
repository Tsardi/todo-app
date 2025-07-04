import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0User } from '../../types';

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0<Auth0User>();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    isAuthenticated && user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;