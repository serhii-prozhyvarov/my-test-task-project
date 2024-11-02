const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const taskSchema = new mongoose.Schema({
  description: String,
  day: String,
});

const Task = mongoose.model('Task', taskSchema);

app.post('/tasks', async (req, res) => {
  const { description, day } = req.body;
  const newTask = new Task({ description, day });
  await newTask.save();
  res.status(201).json(newTask);
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(204).send();
});

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { description, day } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { description, day },
    { new: true }
  );
  res.json(updatedTask);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
