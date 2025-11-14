import './App.css'
import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [clicks, setClicks] = useState(0)

  const handleButtonClick = () => {
    setClicks(clicks + 1)
  }

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  return (
    <div className="container">
      <h1>⚛️ React + Vite</h1>
      
      <Card title="Welcome to My React App">
        <p>This is a simple React application built with Vite. It demonstrates functional components and React hooks.</p>
      </Card>

      <Card title="Input Component Demo">
        <p>Enter your name:</p>
        <Input 
          placeholder="Enter your name..." 
          type="text"
          onChange={handleInputChange}
        />
        {inputValue && <p className="info-text">Hello, <strong>{inputValue}!</strong> 👋</p>}
      </Card>

      <Card title="Button Component Demo">
        <p>Click the button below:</p>
        <Button 
          text="Click me!"
          type="button"
          onClick={handleButtonClick}
        />
        <p className="info-text">You clicked {clicks} time{clicks !== 1 ? 's' : ''} 🎯</p>
      </Card>

      <Card title="Features">
        <ul>
          <li>✅ Reusable React Components</li>
          <li>✅ Props & Event Handlers</li>
          <li>✅ React Hooks (useState)</li>
          <li>✅ CSS Styling</li>
          <li>✅ Vite Build Tool</li>
        </ul>
      </Card>
    </div>
  )
}

export default App

