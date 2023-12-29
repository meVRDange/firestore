import React from 'react'
import uuid from 'react-uuid';

const handleClick = () => {
    console.log(uuid());
}
export default function Uuid() {
  return (

    <button onClick={handleClick}></button>
  )
}
