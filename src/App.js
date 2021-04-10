import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {

  const [bgColor, setBgColor] = useState('red');
  const toChangeColor = bgColor === 'red' ? 'blue' : 'red'

  const [disabled, setDisabled] = useState(false);

  const updateButton = () => {
    setBgColor(toChangeColor)
  }

  return (
    <div className="">
      <button style={{backgroundColor: disabled ? 'gray' : bgColor}} onClick={updateButton} disabled={disabled}>Change to {toChangeColor}</button>
      <input type="checkbox" id="disable-button-checkbox" onChange={(e) => setDisabled(e.target.checked)}></input>
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;