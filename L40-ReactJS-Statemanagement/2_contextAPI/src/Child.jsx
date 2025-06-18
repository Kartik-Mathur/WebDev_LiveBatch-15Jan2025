import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
    console.log("Running Child");
  return (
    <div>
      <GrandChild />
    </div>
  )
}

export default Child
