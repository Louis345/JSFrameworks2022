import React from 'react' 

interface user {
  name: string,
  age: number
};

export default function Welcome({name, age}:user) {
  return (
    <p>
      My name is {name} and i'm {age}.
    </p>
  )
}