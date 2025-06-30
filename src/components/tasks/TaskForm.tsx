import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Task } from '../../types';

interface TaskFormProps {
  onSubmit: SubmitHandler<Omit<Task, 'id'>>;
  initialTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTask }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Omit<Task, 'id'>>();

  useEffect(() => {
    if (initialTask) {
      setValue('title', initialTask.title);
      setValue('description', initialTask.description);
      setValue('status', initialTask.status);
      setValue('dueDate', initialTask.dueDate);
    }
  }, [initialTask, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input {...register('title', { required: 'Title is required' })} />
        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea {...register('description', { required: 'Description is required' })} />
        {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select {...register('status', { required: 'Status is required' })}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        {errors.status && <p style={{ color: 'red' }}>{errors.status.message}</p>}
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" {...register('dueDate', { required: 'Due date is required' })} />
        {errors.dueDate && <p style={{ color: 'red' }}>{errors.dueDate.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;