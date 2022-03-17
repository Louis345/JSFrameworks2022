import React from 'react'

export default function Welcome({name = 'user', age}) {
  return (
    <div>
      Hello {name } 
      {age ? age : null}
    </div>
  )
}

