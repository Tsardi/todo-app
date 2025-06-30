import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import TaskForm from '../tasks/TaskForm';
import { useTasks } from '../../context/TaskContext';
import { Task } from '../../types';
const CreateTaskPage: React.FC = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Omit<Task, 'id'>> = (data) => {
    addTask(data);
    navigate('/'); // Redirect to dashboard after creation
  };

  const pageStyle: React.CSSProperties = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  return (
    <div style={pageStyle}>
      <h1>Create New Task</h1>
      <TaskForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreateTaskPage;