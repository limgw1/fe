import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ComingSoon() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Coming Soon!</h1>
      <h2>Prodigy is still in development. This is an oncoming feature! Stay tuned for more updates!</h2>
      <button onClick={(e) => {navigate(-1)}}>Go Back to Previous Page</button>
    </>
  )
}
