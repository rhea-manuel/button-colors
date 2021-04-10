import logo from './logo.svg';
import './App.css';

function App() {

  const changeStyle = (event) => {
    const element = document.querySelector('button')
    // event.target.style.backgroundColor = 'blue'
    element.style.backgroundColor = 'blue'
    element.innerHTML = 'Change to red'
  }

  return (
    <div className="">
      <button style={{backgroundColor:'red'}} onClick={changeStyle}>Change to blue</button>
    </div>
  );
}

export default App;
