import React, { useState } from 'react';
import './App.css';
import Header from './component/header';
import Tasks from './component/Tasks';
import Form from './component/form';
const App = () => {

  const [arryTask, setArryTask] = useState([
    {
      id: 1,
      title: 'finish the smart brain app',
      note: ' quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
    },
    {
      id: 2,
      title: ' brain app',
      note: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
    },
    {
      id: 3,
      title: 'eat food',
      note: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  //////////

  ///////////

  const deleteTask = (id) => {
    setArryTask(arryTask.filter((tsk) => tsk.id !== id));
  };
  //////////

  const addTask = (tsk) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...tsk };
    setArryTask([...arryTask, newTask]);
  };
  return (
    <div className="container">
      <Header
        toggleShowBtn={() => setShowForm(!showForm)}
        valueBtn={showForm}
      />
      {showForm && <Form onAdd={addTask} />}
      <div>
        {arryTask.length > 0 ? (
          <Tasks arry={arryTask} onDelete={deleteTask} />
        ) : (
          <h1 className='center'>Empty Note !!</h1>
        )}
      </div>
    </div>
  );
};

export default App;
