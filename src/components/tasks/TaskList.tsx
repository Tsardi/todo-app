import React from 'react';
import { useTasks } from '../../context/TaskContext';
import TaskListItem from './TaskListItem';

const TaskList: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <div>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;