import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { TaskProvider } from './context/TaskContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/common/Header';
import Loading from './components/common/Loading';
import DashboardPage from './components/pages/DashboardPage';
import CreateTaskPage from './components/pages/CreateTaskPage';
import EditTaskPage from './components/pages/EditTaskPage';
import TaskDetailsPage from './components/pages/TaskDetailsPage';
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <TaskProvider>
        <Header /> {/* <-- ADD HEADER HERE */}
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <DashboardPage />
                ) : (
                  <LoginPage />
                )
              }
            />
            <Route
              path="/create"
              element={<ProtectedRoute component={CreateTaskPage} />}
            />
            <Route
              path="/edit/:id"
              element={<ProtectedRoute component={EditTaskPage} />}
            />
            <Route
              path="/task/:id"
              element={<ProtectedRoute component={TaskDetailsPage} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </TaskProvider>
    </Router>
  );
}

export default App;