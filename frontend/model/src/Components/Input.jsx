import React from 'react'

export const Input = ({ name, label }) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input name={name} id={name} />
      </div>
    );
  }
