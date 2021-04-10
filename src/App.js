import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {

  const [bgColor, setBgColor] = useState({
    currentColor:'red',
    toChange:'blue'
  })

  const updateButton = () => {

    const temp = bgColor.currentColor
    setBgColor({
      currentColor: bgColor.toChange,
      toChange: temp
    })

  }

  return (
    <div className="">
      <button style={{backgroundColor:bgColor.currentColor}} onClick={updateButton}>Change to {bgColor.toChange}</button>
    </div>
  );
}

export default App;
