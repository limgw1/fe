import React, { useState } from 'react';
import './Sidebar.css'; // Make sure this path is correct

export default function Sidebar() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className={`sidebar ${hidden ? 'hidden' : ''}`}>
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? 'Show' : 'Hide'}
      </button>
      {!hidden && <p>Sidebar Content</p>}
    </div>
  );
}
