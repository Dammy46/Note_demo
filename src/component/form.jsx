import React, { useState } from 'react'

const Form = ({onAdd}) => {
   const [title, setTitle] = useState('');
   const [note, setNote] = useState('');

   const onSubmit = (e) => {
      e.preventDefault()
      if (!title && !note) {
         alert('fill in the inputs!!')
         return
      }

      onAdd({ title, note })
      setTitle('')
      setNote('')
  }
  
   
   
  return (
    <form className="add-form" onSubmit={onSubmit} >
      <div className="form-control">
        <label>Title</label>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Title</label>
        <textarea
          placeholder="Enter your note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        ></textarea>
      </div>

      <input type="submit" value="Save note" className="btn btn-block" />
    </form>
  );
}

export default Form