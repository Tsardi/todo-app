import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTasks } from '../../context/TaskContext';

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById } = useTasks();

  const pageStyle: React.CSSProperties = {
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const detailItemStyle: React.CSSProperties = {
    marginBottom: '15px',
  };

  if (!id) {
    return (
        <div style={pageStyle}>
            <h1>Invalid Task ID</h1>
            <Link to="/">Back to Dashboard</Link>
        </div>
    );
  }
  
  const task = getTaskById(id);

  if (!task) {
    return (
      <div style={pageStyle}>
        <h1>Task Not Found</h1>
        <p>We couldn't find the task you're looking for.</p>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1>{task.title}</h1>
      <div style={detailItemStyle}>
        <strong>Description:</strong>
        <p>{task.description}</p>
      </div>
      <div style={detailItemStyle}>
        <strong>Status:</strong> {task.status}
      </div>
      <div style={detailItemStyle}>
        <strong>Due Date:</strong> {task.dueDate}
      </div>
      <Link to={`/edit/${task.id}`}>Edit Task</Link> |{' '}
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
};

export default TaskDetailsPage;