import React, { useState, useEffect } from 'react';
import {
  TaskWrapper,
  Description,
  Form,
  Input,
  Button,
} from './TaskManagement.styled';

const TaskManagement = () => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    setTasks(data);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: task, day }),
    });
    if (response.ok) {
      const newTask = await response.json();
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTask('');
      setDay('');
    }
  };

  const handleDelete = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(prevTasks => prevTasks.filter(t => t._id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskWrapper>
      <h1>Add or Edit Task</h1>
      <Description>
        This is a sample of one of our product variants, which utilizes a
        MongoDB database. With this tool, you can plan tasks for an entire week,
        ensuring effective time and resource management.
      </Description>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Task Description"
        />
        <Input
          type="text"
          value={day}
          onChange={e => setDay(e.target.value)}
          placeholder="Day of the Week"
        />
        <Button type="submit">Submit</Button>
      </Form>
      <ul>
        {tasks.map(t => (
          <li key={t._id}>
            {t.description} on {t.day}
            <button onClick={() => handleDelete(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </TaskWrapper>
  );
};

export default TaskManagement;
