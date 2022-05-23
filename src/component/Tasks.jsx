import React from 'react';
import Task from './Task';
const Tasks = ({ arry, onDelete }) => {
  return (
    <div>
      {arry.map((tsk) => (
        <Task key={tsk.id} task={tsk} onD={onDelete}/>     
      ))}
    </div>
  );
};

export default Tasks;
