import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  // find an element with role of button and text of 'change to blue'
  const button = screen.getByRole('button', {name: /change to blue/i});
  expect(button).toHaveStyle({backgroundColor:'red'})

  // click button
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({backgroundColor: 'blue'});

  // make sure the button text has changed as well
  expect(button.textContent).toBe('Change to red');

});

test('initial conditions', () => {
  render(<App/>);
  // button should start enabled 
  const button = screen.getByRole('button', {name: /change to blue/i});
  expect(button).toBeEnabled();
  
  //  checkbox should start unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

})

test ('checkbox enabled/disabled working', ()=> {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent.click(checkbox);

  const button = screen.getByRole('button');
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).not.toBeDisabled();

})

test('button becomes gray when disabled', ()=>{
  render(<App/>)
  const button = screen.getByRole('button', {name:/change to blue/i});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // Disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'gray'});

  // Enable button 
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'red'});

  // Click button and change it to blue
  fireEvent.click(button);

  // Disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'});

  // Enable button—make sure it is still blue
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'blue'});

})