import React, { useState } from 'react';
import '../styles/form.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      taskName,
      dueDate,
      time,
      priority,
    };

    setTasks([...tasks, newTask]);

    setTaskName('');
    setDueDate('');
    setTime('');
    setPriority('');
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    const task = tasks[index];
    setTaskName(task.taskName);
    setDueDate(task.dueDate);
    setTime(task.time);
    setPriority(task.priority);
    handleDelete(index);
  };

  return (
    <div className="page">
      <div className="MAincontainer">
        <div className="Navcontainer">
          <h1>To-Do List</h1>
        </div>
        <div className="contentContainer">
          <div className="leftside">
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  value={taskName}
                  onChange={handleTaskNameChange}
                  placeholder="Task Name:"
                  className="form"
                />
              </label>

              <br />

              <label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={handleDueDateChange}
                  placeholder="Due Date:"
                  className="form"
                />
              </label>

              <br />

              <label>
                <input
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  placeholder="Time:"
                  className="form"
                />
              </label>

              <br />

              <label>
                <select
                  value={priority}
                  onChange={handlePriorityChange}
                  className="form"
                >
                  <option value="">Priority:</option>
                  <option value="blue">Moderate</option>
                  <option value="red">Important</option>
                  <option value="yellow">Least</option>
                </select>
              </label>

              <br />

              <button type="submit" className="form2">
                Add Task
              </button>
            </form>
          </div>
          <div className="rightside">
            <h2>Tasks:</h2>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} style={{ color: task.priority }}>
                  {task.taskName} - {task.dueDate} - {task.time}
                  <button onClick={() => handleEdit(index)} className='editbutton buttons'>Edit</button>
                  <button onClick={() => handleDelete(index)} className='deletebutton buttons'>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
