import './Input.css'
import { useState } from 'react'

export default function Input({ 
  placeholder = 'Enter text...', 
  type = 'text',
  onChange 
}) {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}

