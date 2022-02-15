import React from 'react'

export default function SmallPersonListItem({ person }) {
    const {name, age} = person;

  return (
    <div>
        <p>
            Name: {name}
        </p>
    </div>
  )
}
