import React from 'react'
import './TaskItem.css';

export default function MainContainer() {

  return (
    <div className='task-item'>
        <div>
            <input type='radio'/>
            <span>Todo: Study for CSS</span>
        </div>
        <span className='category'>Study</span>
    </div>
  )
}