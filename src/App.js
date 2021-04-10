import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {

  const [bgColor, setBgColor] = useState('red');
  const toChangeColor = bgColor === 'red' ? 'blue' : 'red'

  const updateButton = () => {
    setBgColor(toChangeColor)
  }

  return (
    <div className="">
      <button style={{backgroundColor:bgColor}} onClick={updateButton}>Change to {toChangeColor}</button>
    </div>
  );
}

export default App;
