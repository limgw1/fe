import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <ul className='sidebar__items'>
      <li className="sidebar__navbar">
        <div className='sidebar__navbar__container'>
          <div className='profile-pic'>PFP</div>
          <ul className='non-pfp'>
            <li className='non-pfp__item'>Username</li>
            <li className='non-pfp__item'>Icon</li>
            <li className='non-pfp__item'>Icon</li>
          </ul>
        </div>
      </li>
      <li className="sidebar__item">
        <ul className='sidebar__subitems'>
          <li className='sidebar__item__subitem'>Add Task</li>
          <li className='sidebar__item__subitem'>Today</li>
          <li className='sidebar__item__subitem'>Upcoming</li>
          <li className='sidebar__item__subitem'>Filters and Labels</li>
        </ul>
      </li>
      <li className="sidebar__item">
        <div className="sidebar__item title">Favorites</div>
        <ul className='sidebar__subitems'>
          <li className='sidebar__item__subitem'>Favourite Project 1</li>
          <li className='sidebar__item__subitem'>Favourite Project 2</li>
          <li className='sidebar__item__subitem'>Favourite Project 3</li>
          <li className='sidebar__item__subitem'>Favourite Project 4</li>
        </ul>
      </li>
    </ul>
  );
}
