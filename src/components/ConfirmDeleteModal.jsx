import React from 'react'

export default function ConfirmDeleteModal() {
  return (
    <div className='modal'>
      <p>Are you sure you want to delete this?</p>
      <button>Yes</button>
      <button>No</button>
    </div>
  )
}
