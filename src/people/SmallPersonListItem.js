import React from 'react'

export default function SmallPersonListItem({ person }) {
    const {name, age} = person;

  return (
    <div style={{backgroundColor: "blanchedalmond"}}>
        <p>
            Name: {name}, Age: {age} years
        </p>
    </div>
  )
}
