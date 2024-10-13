import React, { useState } from 'react';

const TaskManagement = () => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Логика для добавления или редактирования задачи
    console.log('Task submitted:', task);
  };

  return (
    <div>
      <h1>Add or Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Task Description"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskManagement;
