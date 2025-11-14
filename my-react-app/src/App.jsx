import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'

function App() {
  return (
    <div className="container">
      <h1>React + Vite</h1>
      <Card title="Welcome to My React App">
        <p>This is a simple React application built with Vite.</p>
      </Card>
      <Input placeholder="Enter your name" />
      <Button>Click me!</Button>
    </div>
  )
}

export default App

