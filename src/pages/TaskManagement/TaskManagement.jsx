import React, { useState, useEffect } from 'react';
import {
  TaskWrapper,
  Description,
  Form,
  Input,
  Button,
  TaskList,
  DayGroup,
} from './TaskManagement.styled';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const TaskManagement = () => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    setTasks(data);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const method = editingTaskId ? 'PUT' : 'POST';
    const url = editingTaskId
      ? `http://localhost:5000/tasks/${editingTaskId}`
      : 'http://localhost:5000/tasks';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: task, day }),
    });

    if (response.ok) {
      const newTask = await response.json();
      setTasks(prevTasks => {
        if (editingTaskId) {
          return prevTasks.map(t => (t._id === editingTaskId ? newTask : t));
        }
        return [...prevTasks, newTask];
      });
      resetForm();
    }
  };

  const resetForm = () => {
    setTask('');
    setDay('');
    setEditingTaskId(null);
  };

  const handleEdit = task => {
    setTask(task.description);
    setDay(task.day);
    setEditingTaskId(task._id);
  };

  const handleDelete = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(prevTasks => prevTasks.filter(t => t._id !== id));
  };

  const sortedTasks = tasks.sort((a, b) => {
    return daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day);
  });

  const groupedTasks = sortedTasks.reduce((acc, task) => {
    (acc[task.day] = acc[task.day] || []).push(task);
    return acc;
  }, {});

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskWrapper>
      <div>
        <h1>{editingTaskId ? 'Edit Task' : 'Add Task'}</h1>
        <Description>
          This tool allows you to plan tasks for an entire week.
        </Description>
        <Form onSubmit={handleSubmit}>
          <select value={day} onChange={e => setDay(e.target.value)} required>
            <option value="" disabled>
              Select a day
            </option>
            {daysOfWeek.map(day => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <Input
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder="Task Description"
            required
          />
          <Button type="submit">{editingTaskId ? 'Update' : 'Submit'}</Button>
        </Form>
      </div>
      <TaskList>
        {Object.keys(groupedTasks).map(day => (
          <DayGroup key={day}>
            <h2>{day}</h2>
            <ul>
              {groupedTasks[day].map(t => (
                <li key={t._id}>
                  {t.description}
                  <div>
                    <button onClick={() => handleEdit(t)}>Edit</button>
                    <button onClick={() => handleDelete(t._id)}>X</button>
                  </div>
                </li>
              ))}
            </ul>
          </DayGroup>
        ))}
      </TaskList>
    </TaskWrapper>
  );
};

export default TaskManagement;
