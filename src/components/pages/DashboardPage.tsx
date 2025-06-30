import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../tasks/TaskList';
import LogoutButton from '../auth/LogoutButton';
import Profile from '../auth/Profile';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Task Dashboard</h1>
      <Profile />
      <LogoutButton />
      <br />
      <Link to="/create">Create New Task</Link>
      <TaskList />
    </div>
  );
};

export default DashboardPage;