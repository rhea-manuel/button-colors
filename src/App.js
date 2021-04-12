import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

export function replaceCamelWithSpaces(color){
  return color.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {

  const [bgColor, setBgColor] = useState('MediumVioletRed');
  const toChangeColor = bgColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  const [disabled, setDisabled] = useState(false);

  const updateButton = () => {
    setBgColor(toChangeColor)
  }

  return (
    <div className="">
      <button style={{backgroundColor: disabled ? 'gray' : bgColor}} onClick={updateButton} disabled={disabled}>Change to {replaceCamelWithSpaces(toChangeColor)}</button>
      <input type="checkbox" id="disable-button-checkbox" onChange={(e) => setDisabled(e.target.checked)}></input>
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;