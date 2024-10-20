import React, { useState } from 'react';
import {
  TaskWrapper,
  Description,
  Form,
  Input,
  Button,
} from './TaskManagement.styled';

const TaskManagement = () => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Task submitted:', task);
  };

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
        <Button type="submit">Submit</Button>
      </Form>
    </TaskWrapper>
  );
};

export default TaskManagement;
