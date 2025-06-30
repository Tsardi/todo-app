import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import TaskForm from '../tasks/TaskForm';
import { useTasks } from '../../context/TaskContext';
import { Task } from '../../types';

const EditTaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById, updateTask } = useTasks();
  const navigate = useNavigate();
  
  if (!id) {
    navigate('/404'); // Or some error page
    return null;
  }

  const task = getTaskById(id);

  const onSubmit: SubmitHandler<Omit<Task, 'id'>> = (data) => {
    updateTask({ ...data, id });
    navigate('/'); // Redirect to dashboard after editing
  };
  
  const pageStyle: React.CSSProperties = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  if (!task) {
    return (
        <div style={pageStyle}>
            <h1>Task Not Found</h1>
            <p>The task you are trying to edit does not exist.</p>
            <Link to="/">Go back to Dashboard</Link>
        </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1>Edit Task</h1>
      <TaskForm onSubmit={onSubmit} initialTask={task} />
    </div>
  );
};

export default EditTaskPage;