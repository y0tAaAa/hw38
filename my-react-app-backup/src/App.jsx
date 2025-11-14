import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Текстове поле: ${inputValue}\nПароль: ${password}`);
    setInputValue('');
    setPassword('');
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>React компоненти Button та Input</h1>
        <p>Демонстрація роботи з props та обробниками подій</p>
      </div>

      <div className="app-content">
        <section className="section">
          <h2>Лічильник</h2>
          <div className="counter-display">
            <p>Поточне значення: <strong>{count}</strong></p>
          </div>
          <Button 
            text={`Збільшити (+1)`}
            type="button"
            onClick={handleButtonClick}
          />
        </section>

        <section className="section">
          <h2>Форма введення</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="text-input">Текстове поле:</label>
              <Input
                placeholder="Введіть текст..."
                type="text"
                onChange={handleInputChange}
                value={inputValue}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password-input">Пароль:</label>
              <Input
                placeholder="Введіть пароль..."
                type="password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>

            <div className="button-group">
              <Button
                text="Відправити форму"
                type="submit"
                onClick={handleSubmit}
              />
              <Button
                text="Очистити"
                type="button"
                onClick={() => {
                  setInputValue('');
                  setPassword('');
                }}
              />
            </div>
          </form>

          {inputValue && (
            <div className="display-info">
              <p>Введений текст: <strong>{inputValue}</strong></p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
