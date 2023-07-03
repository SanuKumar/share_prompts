'use client' 
// Error components must be client component

import { useEffect } from 'react'

const Error = ({ error, reset }) => {

  useEffect = (() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
      >Try Again</button>
    </div>
  )
}

export default Error