import React, { useEffect, useState } from 'react';
import List from './components/List';
import axios from 'axios';
import './index.css';
import { baseURL } from './utils/constant';



function App() {  

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, [updateUI]);

  const fetchTasks = () => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  };


  const addTask = () => {
    axios.post(`${baseURL}/save`, { task: input })
      .then((res) => {
        console.log(res.data);
        setInput('');
        setUpdateUI((prevState) => !prevState);
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };


  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setUpdateId(null);
        setInput('');
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
  };

  return (
    <main style={{marginTop:"70px"}}>
      <h1 className="title">CRUD OPERATIONS</h1>
      <input style={{ width: "360px", height: "40px" }} type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button style={{ width: "100px", height: "40px" }} type="submit" onClick={updateId ? updateTask : addTask}>
        {updateId ? 'Update Task' : 'Add Task'}
      </button>
      <ul style={{marginTop:"15px"}}>
        {tasks.map((task) => (
          <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode} />
        ))}
      </ul>
    </main>
  );
}

export default App
