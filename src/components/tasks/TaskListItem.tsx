import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../../types';
import { useTasks } from '../../context/TaskContext';

interface TaskListItemProps {
  task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const { deleteTask } = useTasks();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <Link to={`/task/${task.id}`}>View Details</Link> |{' '}
      <Link to={`/edit/${task.id}`}>Edit</Link> |{' '}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskListItem;