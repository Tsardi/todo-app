import React, { ComponentType } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../common/Loading';

interface ProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });

  return <Component />;
};

export default ProtectedRoute;