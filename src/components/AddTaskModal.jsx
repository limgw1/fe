import React from 'react'

export default function AddTaskModal() {
  return (
    <form>
      <section className='task-modal-left'>
        <label>Title</label>
        <input type='text' name="title"/>
        <button>Complete Task</button>
        <button>Delete Task</button>
        <label>Description</label>
        <input type='text' name="description"/>
      </section>
      <section className='task-modal-right'>
        <div>Date Selection Component</div>
        <button>Add Task</button>
        <button>Cancel</button>
      </section>
    </form>
  )
}
