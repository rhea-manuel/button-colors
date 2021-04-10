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
      <button style={{backgroundColor:bgColor}} onClick={updateButton} disabled={disabled}>Change to {toChangeColor}</button>
      <input type="checkbox" onChange={(e) => setDisabled(e.target.checked)}></input>
    </div>
  );
}

export default App;
