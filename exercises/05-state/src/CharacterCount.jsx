import React from 'react'
import { useState } from 'react'

export default function CharacterCount( ) {
  const [counter, setCounter] = useState('');
  return (
    <div className='box'>
      <textarea onChange={e => setCounter(e.target.value.length)}></textarea><br></br>
      Character Count: {counter}
    </div>
  )
}
