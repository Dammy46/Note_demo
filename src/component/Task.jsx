import React from 'react'

const Task = ({task, onD}) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.note}</p>
      <div style={{ textAlign: 'center' }}>
        <button className="delete" onClick={() => onD(task.id)}>
          Delete note
        </button>
      </div>
    </div>
  );
}

export default Task;