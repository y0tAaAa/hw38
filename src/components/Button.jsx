import './Button.css'

export default function Button({ text, children, type = 'button', onClick }) {
  return (
    <button 
      type={type}
      onClick={onClick} 
      className="btn"
    >
      {text || children}
    </button>
  )
}

